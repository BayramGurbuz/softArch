import firebase_admin
from firebase_admin import auth, credentials, initialize_app
from fastapi import Depends, HTTPException, Security
from fastapi.security import HTTPBearer
import os

base_dir = os.path.dirname(os.path.abspath(__file__))

cred_path = os.path.join(base_dir, "..", "./config/firebase_config.json")

cred = credentials.Certificate(cred_path)

security = HTTPBearer()

async def verify_firebase_token(token: str = Security(security)):
    """
    Kullanıcıdan gelen Firebase Authentication token'ını doğrular.
    """
    try:
        decoded_token = auth.verify_id_token(token.credentials)
        return decoded_token  # Firebase UID ve diğer bilgiler döner
    except Exception as e:
        raise HTTPException(status_code=401, detail="Invalid or expired token")