import whisper
import subprocess
import os

model = whisper.load_model("base")

def extract_audio(video_path: str, audio_path: str):
    command = f"ffmpeg -i {video_path} -q:a 0 -map a {audio_path} -y"
    subprocess.run(command, shell=True)

def transcribe_audio(video_url: str):
    video_path = "temp_video.mp4"
    audio_path = "temp_audio.mp3"
    os.system(f"wget -O {video_path} {video_url}")
    extract_audio(video_path, audio_path)
    
    result = model.transcribe(audio_path)
    return result["text"]
