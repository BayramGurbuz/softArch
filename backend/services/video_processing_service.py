import subprocess

def extract_audio_from_video(video_path: str, audio_output_path: str):
    command = ['ffmpeg', '-i', video_path, '-q:a', '0', '-map', 'a', audio_output_path]
    subprocess.run(command)

def extract_video_from_video(video_path: str, video_output_path: str):
    command = ['ffmpeg', '-i', video_path, '-an', video_output_path]  # Ses olmadan video
    subprocess.run(command)
