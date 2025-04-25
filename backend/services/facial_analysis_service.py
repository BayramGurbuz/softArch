from deepface import DeepFace

def analyze_facial_expressions(image_path: str):
    analysis = DeepFace.analyze(image_path, actions=['emotion'])
    return analysis
