// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import StudyMaterial from "./pages/StudyMaterial";
import Strategy from "./pages/Strategy";
import Auth from "./pages/Auth";
import Navbar from "./pages/Navbar";
import OOPS from "./pages/OOPS";
import OS from "./pages/OS";
import DBMS from "./pages/DBMS";
import CN from "./pages/CN";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/studymaterial" element={<StudyMaterial />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/os" element={<OS />} />
        <Route path="/dbms" element={<DBMS />} />
        <Route path="/cn" element={<CN />} />
        <Route path="/oops" element={<OOPS />} />
      </Routes>
    </Router>
  );
}
