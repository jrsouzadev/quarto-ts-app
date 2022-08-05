import React from "react";
import { useGameDataContext, usePiecesSetContext } from "../../state";
import Tile from "../Tile";
import { StyledBoard, StyledRow } from "./styles";

function MainBoardComponent() {
  const { currentGameStage, setNextGameStage } = useGameDataContext();

  const { getPieceByPosition, placeSelectedPieceInPosition } =
    usePiecesSetContext();

  function convertIndexesToBoardPosition(
    indexA: number,
    indexB: number
  ): PositionsTypesEnum {
    return `${"ABCD"[indexA]}${
      "1234"[indexB]
    }` as unknown as PositionsTypesEnum;
  }

  function handlePiecePlacement(
    event: React.MouseEvent,
    position: PositionsTypesEnum
  ) {
    event.preventDefault();
    if (currentGameStage === "PLACING_PIECE" && !getPieceByPosition(position)) {
      placeSelectedPieceInPosition(position);
      setNextGameStage();
    }
  }

  return (
    <StyledBoard>
      {Array.from(new Array(4)).map((_, a) => (
        <StyledRow key={`board_row_${a}`}>
          {Array.from(new Array(4)).map((_, b) => {
            const tilePosition = convertIndexesToBoardPosition(a, b);
            return (
              <Tile
                key={`board_tile_${tilePosition}`}
                selectable={currentGameStage === "PLACING_PIECE"}
                piece={getPieceByPosition(tilePosition)}
                onClick={(e) => handlePiecePlacement(e, tilePosition)}
              />
            );
          })}
        </StyledRow>
      ))}
    </StyledBoard>
  );
}

export default MainBoardComponent;
