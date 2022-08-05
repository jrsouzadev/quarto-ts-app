import React from "react";
import { useGameDataContext, usePiecesSetContext } from "../../state";
import { StyledNewMatchButton } from "./style";

function StartNewMatchButton() {
  const { startNewMatch } = useGameDataContext();
  const { resetPiecesSet } = usePiecesSetContext();

  function handleStartNewMatch(event: React.MouseEvent) {
    event.preventDefault();
    resetPiecesSet();
    startNewMatch();
  }
  return (
    <StyledNewMatchButton
      onClick={(e: React.MouseEvent) => handleStartNewMatch(e)}
    >
      New Match
    </StyledNewMatchButton>
  );
}

export default StartNewMatchButton;
