import React from "react";
import StyledPiece from "./style";

function PieceComponent(props: { piece: Piece }) {
  return <StyledPiece piece={props.piece}></StyledPiece>;
}

export default PieceComponent;
