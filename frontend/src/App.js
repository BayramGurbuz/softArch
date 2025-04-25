import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import UploadPage from "./presentations/UploadPage"; 
import ResultsPage from "./presentations/ResultsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/upload" />} />
        <Route path="/upload" element={<UploadPage />} /> 
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
