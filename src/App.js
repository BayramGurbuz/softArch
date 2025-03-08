import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./presentations/auth_screens/Login";
import Register from "./presentations/auth_screens/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;