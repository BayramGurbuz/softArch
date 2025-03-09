import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./presentations/auth_screens/Login";
import Register from "./presentations/auth_screens/Register";
import Meeting from "./presentations/Meeting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/meeting" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/meeting" element={<Meeting />} />
      </Routes>
    </Router>
  );
}

export default App;