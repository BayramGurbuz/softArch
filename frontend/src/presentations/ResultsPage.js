import { useEffect, useState } from "react";
import axios from "axios";

export default function ResultsPage() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/get-results/")
      .then(res => setResults(res.data))
      .catch(() => setError("Sonuçlar alınırken hata oluştu."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && <p>Sonuçlar yükleniyor...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {results && (
        <div>
          <h2>Transcript:</h2>
          <p>{results.transcript}</p>
          <h2>Summary:</h2>
          <p>{results.summary}</p>
          <h2>Emotions:</h2>
          <p>{results.emotions.join(", ")}</p>
        </div>
      )}
    </div>
  );
}
