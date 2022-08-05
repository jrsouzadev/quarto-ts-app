import React from "react";
import { useGameDataContext, useScoresContext } from "../../state";
import {
  StyledScoresBoard,
  StyledPlayerName,
  StyledHardModeText,
} from "./styles";

function ScoresBoardComponent() {
  const { player1Name, player2Name, hardMode } = useGameDataContext();
  const { player1Victories, player2Victories, draws } = useScoresContext();
  return (
    <StyledScoresBoard>
      <StyledPlayerName player={1}>
        <h4>{player1Name}:</h4>
        <div>{player1Victories}</div>
      </StyledPlayerName>
      <StyledPlayerName player={"DRAW"}>
        <h4>Draws:</h4>
        <div>{draws}</div>
      </StyledPlayerName>
      <StyledPlayerName player={2}>
        <h4>{player2Name}:</h4>
        <div>{player2Victories}</div>
      </StyledPlayerName>
      <StyledHardModeText activated={hardMode}>
        <h4>Hard Mode:</h4> <div>{hardMode ? "ON" : "OFF"}</div>
      </StyledHardModeText>
    </StyledScoresBoard>
  );
}

export default ScoresBoardComponent;
