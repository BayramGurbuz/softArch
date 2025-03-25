from deepface import DeepFace
import cv2
import os

def analyze_faces(video_url: str):
    video_path = "temp_video.mp4"
    os.system(f"wget -O {video_path} {video_url}")

    cap = cv2.VideoCapture(video_path)
    emotions = []

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        analysis = DeepFace.analyze(frame, actions=['emotion'], enforce_detection=False)
        emotions.append(analysis[0]['dominant_emotion'])

    cap.release()
    return emotions
