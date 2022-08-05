function generateNormalWinningSequences(): PositionsTypesEnum[][] {
  return [
    ["A1", "A2", "A3", "A4"],
    ["B1", "B2", "B3", "B4"],
    ["C1", "C2", "C3", "C4"],
    ["D1", "D2", "D3", "D4"],
    ["A1", "B1", "C1", "D1"],
    ["A2", "B2", "C2", "D2"],
    ["A3", "B3", "C3", "D3"],
    ["A4", "B4", "C4", "D4"],
    ["A1", "B2", "C3", "D4"],
    ["A4", "B3", "C2", "D1"],
  ] as unknown as PositionsTypesEnum[][];
}

function generateHardWinningSequences(): PositionsTypesEnum[][] {
  return [
    ["A1", "A2", "B1", "B2"],
    ["A2", "A3", "B2", "B3"],
    ["A3", "A4", "B3", "B4"],
    ["B1", "B2", "C1", "C2"],
    ["B2", "B3", "C2", "C3"],
    ["B3", "B4", "C3", "C4"],
    ["C1", "C2", "D1", "D2"],
    ["C2", "C3", "D2", "D3"],
    ["C3", "C4", "D3", "D4"],
  ] as unknown as PositionsTypesEnum[][];
}

function evaluateColor(pieces: Piece[]): boolean {
  return (
    pieces.every((piece) => piece.color === "WHITE") ||
    pieces.every((piece) => piece.color === "BROWN")
  );
}

function evaluateFill(pieces: Piece[]): boolean {
  return (
    pieces.every((piece) => piece.fill === "HOLLOW") ||
    pieces.every((piece) => piece.fill === "SOLID")
  );
}

function evaluateShape(pieces: any[]): boolean {
  return (
    pieces.every((piece) => piece.shape === "CIRCLE") ||
    pieces.every((piece) => piece.shape === "SQUARE")
  );
}

function evaluateSize(pieces: any[]): boolean {
  return (
    pieces.every((piece) => piece.size === "BIG") ||
    pieces.every((piece) => piece.size === "SMALL")
  );
}

function evaluateGameEnd(
  pieces: Piece[],
  currentPlayer: CurrentPlayersTypes,
  hardMode?: boolean
): GameEndData | undefined {
  let validSequences = hardMode
    ? [...generateNormalWinningSequences(), ...generateHardWinningSequences()]
    : [...generateNormalWinningSequences()];
  let sequencesConvertedToPieces = validSequences
    .map((array) =>
      array.map(
        (position) => pieces.find((piece) => piece.position === position)!
      )
    )
    .filter((array) => array.every((item) => item !== undefined));
  let winningPiecesIds: string[] = [];
  for (let i = 0; i < sequencesConvertedToPieces.length; i++) {
    let currentSequence = sequencesConvertedToPieces[i];
    let color = evaluateColor(currentSequence);
    let fill = evaluateFill(currentSequence);
    let shape = evaluateShape(currentSequence);
    let size = evaluateSize(currentSequence);

    if (color || fill || shape || size) {
      let ids = currentSequence.map((piece) => piece.id);
      winningPiecesIds.push( ...ids );
    }
  }

  if (winningPiecesIds.length === 0 && pieces.every((piece) => piece.position !== undefined)) {
    return {
      winner: "DRAW",
      winningPiecesIds
    }
  } else if (winningPiecesIds.length > 0) {
    return {
      winner: currentPlayer,
      winningPiecesIds
    }
  } else {
    return undefined
  }
}

export default evaluateGameEnd;
