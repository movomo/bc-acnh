import styled from "./css/App.module.css";
import "./css/main.css";
import "./fonts/font.css";
import { createGlobalStyle } from "styled-components";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import InputNickname from "./components/common/InputNickname";
import Explore from "./components/explore/Explore";
import MatchIntro from "./components/match/MatchIntro";
import MatchTest from "./components/match/MatchTest";
import MatchResult from "./components/match/MatchResult";
import Today from "./components/Today/Today";
import Bestiary from "./components/Bestiary/Bestiary";
import GameResult from "./components/game/GameResult";
import Game from "./components/game/Game";
import GameHOF from "./components/game/GameHOF";
import GameIntro from "./components/game/GameIntro";

const GlobalFont = createGlobalStyle`
  font-family: "TmoneyRoundWindExtraBold"
`;

function App() {
  return (
    <div className={styled.App}>
      <GlobalFont />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/game" element={<InputNickname />} />
          <Route path="/game-intro" element={<GameIntro />} />
          <Route path="/game-start" element={<Game />} />
          <Route path="/game-result" element={<GameResult />} />
          <Route path="/game-hof" element={<GameHOF />} />
          <Route path="/today" element={<Today />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/match-intro" element={<MatchIntro />} />
          <Route path="/match" element={<InputNickname />} />
          <Route path="/match-test" element={<MatchTest />} />
          <Route path="/match-result" element={<MatchResult />} />
          <Route path="/bestiary" element={<Bestiary />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
