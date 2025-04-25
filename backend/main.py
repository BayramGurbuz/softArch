from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import upload, result

app = FastAPI()

# CORS ayarları
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(upload.router)  # Video yükleme işlemi
app.include_router(result.router)  # Sonuçları döndüren API
