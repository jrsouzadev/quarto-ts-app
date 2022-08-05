import React from "react";
import { useGameDataContext, usePiecesSetContext } from "../../state";
import TileComponent from "../Tile";
import { StyledRemainingPieces } from "./style";

function RemainingPiecesComponent() {
  const {
    currentGameStage,
    isFirstMove,
    setNextPlayer,
    setNextGameStage,
    setPastFirstMove,
  } = useGameDataContext();

  const { pieces, selectPieceForOpponent } = usePiecesSetContext();

  function handlePieceSelection(event: React.MouseEvent, pieceId: string) {
    event.preventDefault();
    if (currentGameStage === "SELECTING_PIECE") {
      selectPieceForOpponent(pieceId);
      setNextPlayer();
      setNextGameStage();
      if (isFirstMove) {
        setPastFirstMove();
      }
    }
  }

  return (
    <>
      <StyledRemainingPieces>
        {pieces
          .filter((piece) => piece.position === undefined && !piece.isSelected)
          .map((piece, index) => (
            <TileComponent
              key={`tile_${index}`}
              selectable={currentGameStage === "SELECTING_PIECE"}
              piece={piece}
              onClick={(e) => handlePieceSelection(e, piece.id)}
            />
          ))}
      </StyledRemainingPieces>
    </>
  );
}

export default RemainingPiecesComponent;
