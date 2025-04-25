from pydantic import BaseModel

class FacialExpressionAnalysis(BaseModel):
    person_id: int
    emotions: dict  # Yüz ifadelerinin analiz sonuçları
