from deepface import DeepFace
import cv2
import os
import dlib

# Duygu analizi için basit bir model (Bunu daha gelişmiş hale getirebilirsin)
def estimate_emotion(face):
    # Örnek olarak yüz genişliğine göre tahmini duygu döndürülüyor
    width = face.right() - face.left()
    if width > 100:
        return "happy"
    else:
        return "neutral"

# OpenCV + dlib kullanarak yüz analizi
def analyze_faces(video_url: str):
    video_path = "temp_video.mp4"
    os.system(f"wget -O {video_path} {video_url}")

    cap = cv2.VideoCapture(video_path)
    emotions = []

    detector = dlib.get_frontal_face_detector()

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = detector(gray)

        for face in faces:
            emotion = estimate_emotion(face)
            emotions.append(emotion)

    cap.release()
    return emotions