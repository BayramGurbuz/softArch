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
