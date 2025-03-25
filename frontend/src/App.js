import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./presentations/auth_screens/Login";
import Register from "./presentations/auth_screens/Register";
import Meeting from "./presentations/meeting_screens/Meeting";
import Home from "./presentations/Home";
import UploadPage from "./presentations/UploadPage"; 
import ResultsPage from "./presentations/ResultsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/meeting" element={<Meeting />} />
        <Route path="/upload" element={<UploadPage />} /> 
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
