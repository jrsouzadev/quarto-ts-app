/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

import {
  useGameDataContext,
  usePiecesSetContext,
  useScoresContext,
} from "../../state";

import StartMenu from "../StartMenu";
import ScoresBoard from "../ScoresBoard";
import GameInfoText from "./GameInfoText";
import SelectedPieceComponent from "../SelectedPiece";
import MainBoard from "../MainBoard";
import RemainingPieces from "../RemainingPieces";
import EndGameButton from "./EndGameButton";
import StartNewMatchButton from "./StartNewMatchButton";

import evaluateGameEnd from "./evaluateGameEnd";
import { BoardContainer } from "./style";

function Game() {
  const {
    hardMode,
    hasGameStarted,
    currentPlayer,
    currentGameStage,
    setGameFinished,
  } = useGameDataContext();
  const { addPlayer1Victory, addPlayer2Victory, addDraw } = useScoresContext();
  const { pieces } = usePiecesSetContext();

  useEffect(() => {
    let gameEnd = evaluateGameEnd(pieces, currentPlayer, hardMode);
    if (gameEnd) {
      setGameFinished(gameEnd);
      if (gameEnd.winner === 1) {
        addPlayer1Victory();
      } else if (gameEnd.winner === 2) {
        addPlayer2Victory();
      } else {
        addDraw();
      }
    }
  }, [pieces]);

  return hasGameStarted ? (
    <Container>
      <ScoresBoard />
      <GameInfoText />
      <BoardContainer>
        {currentGameStage === "END" ? (
          <StartNewMatchButton />
        ) : (
          <SelectedPieceComponent />
        )}
        <MainBoard />
      </BoardContainer>
      <RemainingPieces />
      <EndGameButton />
    </Container>
  ) : (
    <StartMenu />
  );
}

export default Game;
