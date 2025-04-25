from fastapi import APIRouter, File, UploadFile
from services.transcription_service import transcribe_audio
from services.facial_analysis_service import analyze_facial_expressions
from services.video_processing_service import extract_audio_from_video, extract_video_from_video

router = APIRouter()

@router.post("/upload-video/")
async def upload_video(file: UploadFile = File(...)):
    file_path = f"./uploads/{file.filename}"
    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    audio_file_path = file_path.replace(".mp4", ".wav")
    extract_audio_from_video(file_path, audio_file_path)
    
    video_frame_path = file_path.replace(".mp4", "_frame.jpg")
    extract_video_from_video(file_path, video_frame_path)

    transcript = transcribe_audio(audio_file_path)
    facial_analysis = analyze_facial_expressions(video_frame_path)

    return {
        "transcript": transcript,
        "facial_analysis": facial_analysis
    }
