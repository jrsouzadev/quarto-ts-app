import React from "react";
import { Button } from "react-bootstrap";
import {
  useGameDataContext,
  usePiecesSetContext,
  useScoresContext,
} from "../../state";

function EndGameButton() {
  const { resetGameData } = useGameDataContext();
  const { resetScores } = useScoresContext();
  const { resetPiecesSet } = usePiecesSetContext();

  function handleEndGame(event: React.MouseEvent) {
    event.preventDefault();
    const confirm = window.confirm("Are you sure you want to quit the game?");
    if (confirm) {
      resetGameData();
      resetPiecesSet();
      resetScores();
    }
  }

  return (
    <Button variant="secondary" type="button" onClick={(e) => handleEndGame(e)}>
      End Game
    </Button>
  );
}

export default EndGameButton;
