import React from "react";
import { useGameDataContext } from "../../state";
import { StyledTile } from "./style";
import Piece from "../Piece";

function TileComponent(props: {
  selectable: boolean;
  piece?: Piece;
  onClick?: React.MouseEventHandler;
}) {
  const { lastWinner, currentPlayer, winningPiecesIds } = useGameDataContext();

  return (
    <StyledTile
      selectable={props.selectable}
      player={currentPlayer}
      containsWinningPiece={
        props.piece && winningPiecesIds.some((id) => id === props.piece?.id)
      }
      lastWinner={lastWinner}
      onClick={props.onClick}
    >
      {props.piece && <Piece piece={props.piece} />}
    </StyledTile>
  );
}

export default TileComponent;
