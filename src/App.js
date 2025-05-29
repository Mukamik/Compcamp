import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Missions from "./pages/Missions";
import MissionDetail from "./pages/MissionDetail";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>
            <Link to="/">CodeQuest 🚀</Link>
          </h1>
          <nav>
            <Link to="/missions">Missions</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/missions/:missionId" element={<MissionDetail />} />
          </Routes>
        </main>
        <footer>
          <p>
            Made with ❤️ for future coders! &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </Router>
  );
}