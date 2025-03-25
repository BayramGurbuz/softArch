from auth.firebase_auth import verify_firebase_token
from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import OAuth2PasswordBearer
from firebase_admin import auth, credentials
from pydantic import BaseModel

app = FastAPI()

@app.get("/")
def home():
    return {"message": "FastAPI Backend Running!"}

class Token(BaseModel):
    token: str

# POST metodunu kullanarak token doğrulama
@app.post("/verify_token/")  # Bu satırda POST methodu kullanılıyor
async def verify_token(data: Token):
    try:
        # Token'ı Firebase ile doğrula
        decoded_token = auth.verify_id_token(data.token)
        return {"message": "Token doğrulandı", "user_info": decoded_token}
    except Exception as e:
        raise HTTPException(status_code=400, detail="Geçersiz token")

# FIREBASE BAŞLATMA
import firebase_admin
from firebase_admin import credentials, storage, firestore
from fastapi import FastAPI, File, UploadFile
import uuid

cred = credentials.Certificate("config/firebase_config.json")
firebase_admin.initialize_app(cred, {
    'storageBucket': 'your-project-id.appspot.com'
})

db = firestore.client()
bucket = storage.bucket()
app = FastAPI()


# VİDEO YÜKLEME
@app.post("/upload-video/")
async def upload_video(file: UploadFile = File(...)):
    file_extension = file.filename.split(".")[-1]
    unique_filename = f"{uuid.uuid4()}.{file_extension}"
    blob = bucket.blob(f"videos/{unique_filename}")
    blob.upload_from_file(file.file, content_type=file.content_type)
    
    video_url = blob.public_url
    return {"video_url": video_url}

from models.whisper_model import transcribe_audio

# SES TRANSKRİPT API
@app.post("/transcribe/")
async def transcribe(video_url: str):
    transcript = transcribe_audio(video_url)
    return {"transcript": transcript}

# METİN ÖZETLEME API
from models.summarization import summarize_text

@app.post("/summarize/")
async def summarize(transcript: str):
    summary = summarize_text(transcript)
    return {"summary": summary}

# MİMİK ANALİZ API
from models.face_analysis import analyze_faces

@app.post("/analyze-face/")
async def analyze_face(video_url: str):
    emotions = analyze_faces(video_url)
    return {"emotions": emotions}


# SONUÇLARI KAYDETME
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
