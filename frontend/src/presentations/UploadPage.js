import { useState } from "react";
import axios from "axios";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setError("Lütfen bir dosya seçin!");
      return;
    }
    
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);
      
      const response = await axios.post("http://127.0.0.1:8000/upload-video/", formData);
      setVideoUrl(response.data.video_url);
    } catch (err) {
      setError("Yükleme başarısız oldu, lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} disabled={!file || loading}>
        {loading ? "Yükleniyor..." : "Upload"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {videoUrl && <p>Video URL: {videoUrl}</p>}
    </div>
  );
}
