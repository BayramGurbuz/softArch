from fastapi import APIRouter

router = APIRouter()

@router.get("/results/")
async def get_results():
    return {"message": "Sonuçlar burada olacak"}
