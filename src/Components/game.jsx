import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./routes/home"
import Study from "./routes/study"
import Quiz from "./routes/quiz"
import Game from "./routes/gamePage"
import "./game.css";

function game() {
  return (
    <div className="cont">
      <div className="mar">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study" element={<Study />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </div>
  );
}

export default game;
