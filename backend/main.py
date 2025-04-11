from auth.firebase_auth import verify_firebase_token
from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import OAuth2PasswordBearer
from firebase_admin import auth, credentials
from pydantic import BaseModel
import firebase_admin
from firebase_admin import credentials, storage, firestore
from fastapi import FastAPI, File, UploadFile
import uuid
from models.whisper_model import transcribe_audio
from models.summarization import summarize_text
from models.face_analysis import analyze_faces  # import missing analyze_faces

# Firebase Bağlantısı
cred = credentials.Certificate("config/firebase_config.json")
firebase_admin.initialize_app(cred, {
    'storageBucket': "softarch-f3dd7.firebasestorage.app"
})

db = firestore.client()
bucket = storage.bucket()

app = FastAPI()

@app.get("/")
def home():
    return {"message": "FastAPI Backend Running!"}

class Token(BaseModel):
    token: str

# POST metodunu kullanarak token doğrulama
@app.post("/verify_token/")
async def verify_token(data: Token):
    try:
        decoded_token = auth.verify_id_token(data.token)
        return {"message": "Token doğrulandı", "user_info": decoded_token}
    except Exception as e:
        raise HTTPException(status_code=400, detail="Geçersiz token")

# Video Yükleme
@app.post("/upload-video/")
async def upload_video(file: UploadFile = File(...)):
    file_extension = file.filename.split(".")[-1]
    unique_filename = f"{uuid.uuid4()}.{file_extension}"
    blob = bucket.blob(f"videos/{unique_filename}")
    blob.upload_from_file(file.file, content_type=file.content_type)
    video_url = blob.public_url
    return {"video_url": video_url}

# Ses Transkripti
@app.post("/transcribe/")
async def transcribe(video_url: str):
    transcript = transcribe_audio(video_url)
    return {"transcript": transcript}

# Metin Özeti
@app.post("/summarize/")
async def summarize(transcript: str):
    summary = summarize_text(transcript)
    return {"summary": summary}

# Mimik Analizi
@app.post("/analyze-face/")
async def analyze_face(video_url: str):
    emotions = analyze_faces(video_url)
    return {"emotions": emotions}

# Sonuçları Kaydetme
@app.post("/save-results/")
async def save_results(video_url: str, transcript: str, summary: str, emotions: list):
    meeting_id = str(uuid.uuid4())
    db.collection("meetings").document(meeting_id).set({
        "video_url": video_url,
        "transcript": transcript,
        "summary": summary,
        "emotions": emotions
    })
    return {"message": "Results saved!", "meeting_id": meeting_id}
