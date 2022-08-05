/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import { useGameDataContext, usePiecesSetContext } from "../../state";
import Piece from "../Piece";
import { StyledSelectedPiece } from "./style";

function SelectedPieceComponent() {
  const { currentPlayer } = useGameDataContext();
  const { pieces, getSelectedPiece } = usePiecesSetContext();

  const [selectedPiece, setSelectedPiece] = useState<Piece | undefined>(
    undefined
  );

  useEffect(() => {
    setSelectedPiece(getSelectedPiece());
  }, [pieces]);

  return (
    <StyledSelectedPiece player={currentPlayer}>
      {selectedPiece && <Piece piece={selectedPiece} />}
    </StyledSelectedPiece>
  );
}

export default SelectedPieceComponent;
