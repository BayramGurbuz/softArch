from pydantic import BaseModel

class VideoUpload(BaseModel):
    filename: str
    file_path: str
