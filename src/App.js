import React from "react";
import allCountryScores from "./scores.js";
import HighScore from "./HighScoreTable";
import "./App.css";

const App = () => {
  return (
    <div>
      <HighScore CountryScores={allCountryScores} />
    </div>
  );
};

export default App;
