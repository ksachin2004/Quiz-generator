import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import StudyMaterial from "./pages/StudyMaterial";
import Strategy from "./pages/Strategy";
import Navbar from "./pages/Navbar";
import OOPS from "./pages/OOPS";
import OS from "./pages/OS";
import DBMS from "./pages/DBMS";
import CN from "./pages/CN";
import PrivateRoute from "./pages/PrivateRoute";
import Auth from "./pages/Auth";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth mode="login" />} />
        <Route path="/register" element={<Auth mode="register" />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/studymaterial" element={<StudyMaterial />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/os" element={<PrivateRoute><OS /></PrivateRoute>} />
        <Route path="/dbms" element={<PrivateRoute><DBMS /></PrivateRoute>} />
        <Route path="/cn" element={<PrivateRoute><CN /></PrivateRoute>} />
        <Route path="/oops" element={<PrivateRoute><OOPS /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}