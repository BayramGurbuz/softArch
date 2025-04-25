from pydantic import BaseModel

class Transcript(BaseModel):
    text: str
    timestamp: str  # Eğer zaman damgaları gerekiyorsa
