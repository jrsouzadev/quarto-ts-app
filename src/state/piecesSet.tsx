import { useState, createContext, useContext, PropsWithChildren } from "react";
import { generateId } from "../utils";

/**
 * PIECES SET STATE
 */

class PieceObject implements Piece {
  readonly id: string;
  readonly size: PieceSizeTypes;
  readonly shape: PieceShapeTypes;
  readonly color: PieceColorTypes;
  readonly fill: PieceFillTypes;
  position: PositionsTypesEnum | undefined;
  isSelected: boolean;
  constructor(
    size: PieceSizeTypes,
    shape: PieceShapeTypes,
    color: PieceColorTypes,
    fill: PieceFillTypes
  ) {
    this.id = generateId(10);
    this.size = size;
    this.shape = shape;
    this.color = color;
    this.fill = fill;
    this.position = undefined;
    this.isSelected = false;
  }
}

function generateNewPiecesSet(): Piece[] {
  return Array.from(new Array(16)).map(
    (_, i) =>
      new PieceObject(
        i < 4 || (i >= 8 && i < 12) ? "BIG" : "SMALL",
        i < 2 || (i >= 4 && i < 6) || (i >= 8 && i < 10) || (i >= 12 && i < 14)
          ? "SQUARE"
          : "CIRCLE",
        i < 8 ? "BROWN" : "WHITE",
        i % 2 === 0 ? "SOLID" : "HOLLOW"
      )
  );
}

const PiecesSetContext = createContext<PiecesSet | null>(null);

export const PiecesContextProvider = (props: PropsWithChildren) => {
  const [pieces, setPiecesSet] = useState<Piece[]>(generateNewPiecesSet());

  function getPieceByPosition(position: PositionsTypesEnum): Piece | undefined {
    return pieces.find((piece) => piece.position === position);
  }

  function getSelectedPiece(): Piece | undefined {
    return pieces.find((piece) => piece.isSelected);
  }

  function placeSelectedPieceInPosition(position: PositionsTypesEnum): void {
    setPiecesSet((state) => {
      const newState = [...state];
      let selected = newState.find((piece) => piece.isSelected);
      if (selected) {
        selected.position = position;
        selected.isSelected = false;
      }
      return newState;
    });
  }

  function selectPieceForOpponent(pieceId: string): void {
    setPiecesSet((state) => {
      const newState = [...state];
      let piece = newState.find((p) => p.id === pieceId);
      if (piece) {
        piece.isSelected = true;
      }
      return newState;
    });
  }

  function resetPiecesSet() {
    setPiecesSet(generateNewPiecesSet());
  }

  const piecesSetObject: PiecesSet = {
    pieces,

    getPieceByPosition,
    getSelectedPiece,
    placeSelectedPieceInPosition,
    selectPieceForOpponent,
    resetPiecesSet,
  };

  return (
    <PiecesSetContext.Provider value={piecesSetObject}>
      {props.children}
    </PiecesSetContext.Provider>
  );
};

// HOOK

export function usePiecesSetContext(): PiecesSet {
  const piecesSetContext = useContext(PiecesSetContext);
  return piecesSetContext as PiecesSet;
}
