/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { useGameDataContext } from "../../state";
import { StyledInfoText } from "./style";

function GameInfoText() {
  const {
    currentPlayer,
    player1Name,
    player2Name,
    currentGameStage,
    isFirstMove,
    lastWinner,
  } = useGameDataContext();

  const [textDisplay, setTextDisplay] = useState("");

  useEffect(() => {
    setTextDisplay(computeDisplayText());
  }, [currentGameStage, player1Name, player2Name]);

  function computeDisplayText() {
    let player = currentPlayer === 1 ? player1Name : player2Name;
    if (currentGameStage === "END") {
      if (lastWinner === "DRAW") {
        return "The game was a draw";
      } else {
        return `${player} has won the game`;
      }
    } else if (isFirstMove) {
      return `${player} begins by selecting a piece for opponent`;
    } else {
      if (currentGameStage === "PLACING_PIECE") {
        return `${player} places designated piece on the board`;
      } else if (currentGameStage === "SELECTING_PIECE") {
        return `${player} selects a piece for opponent`;
      } else {
        return "";
      }
    }
  }

  return <StyledInfoText className="text-center">{textDisplay}</StyledInfoText>;
}

export default GameInfoText;
