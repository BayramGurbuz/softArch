import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResultPage = () => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get('http://localhost:8000/results/');
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching results", error);
      }
    };
    fetchResults();
  }, []);

  return (
    <div>
      <h1>Meeting Results</h1>
      {results ? (
        <div>
          <h2>Transcript</h2>
          <p>{results.transcript}</p>
          <h2>Facial Expression Analysis</h2>
          <pre>{JSON.stringify(results.facial_analysis, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ResultPage;
