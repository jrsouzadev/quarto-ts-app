/**
 * GAME DATA STATE
 */

type CurrentPlayersTypes = 1 | 2;
type GameStagesTypes = "PLACING_PIECE" | "SELECTING_PIECE" | "END";

interface GameDataProperties {
  player1Name: string;
  player2Name: string;
  hardMode: boolean;
  hasGameStarted: boolean;
  currentPlayer: CurrentPlayersTypes;
  currentGameStage: GameStagesTypes;
  isFirstMove: boolean;
  winningPiecesIds: string[];
  lastWinner: CurrentPlayersTypes | "DRAW" | undefined;
}

interface GameDataMethods {
  setPlayer1Name: (newName: string) => void;
  setPlayer2Name: (newName: string) => void;
  setHardMode: (bool: boolean) => void;
  startNewMatch: () => void;
  setNextPlayer: () => void;
  setNextGameStage: () => void;
  setPastFirstMove: () => void;
  setGameFinished: (gameEndData: GameEndData) => void;
  resetGameData: () => void;
}

interface GameData extends GameDataProperties, GameDataMethods {}

interface GameEndData {
    winner: CurrentPlayersTypes | "DRAW",
    winningPiecesIds: string[]
}

/**
 * PIECES SET STATE
 */

type PieceSizeTypes = "BIG" | "SMALL";
type PieceShapeTypes = "SQUARE" | "CIRCLE";
type PieceFillTypes = "SOLID" | "HOLLOW";
type PieceColorTypes = "WHITE" | "BROWN";

enum PositionsTypesEnum {
  "A1",
  "A2",
  "A3",
  "A4",
  "B1",
  "B2",
  "B3",
  "B4",
  "C1",
  "C2",
  "C3",
  "C4",
  "D1",
  "D2",
  "D3",
  "D4",
}

interface Piece {
  readonly id: string;
  readonly size: PieceSizeTypes;
  readonly shape: PieceShapeTypes;
  readonly color: PieceColorTypes;
  readonly fill: PieceFillTypes;
  position: undefined | PositionsTypesEnum;
  isSelected: boolean;
}

interface PiecesSetProperties {
  pieces: Piece[];
}

interface PiecesSetMethods {
  getPieceByPosition: (position: PositionsTypesEnum) => Piece | undefined;
  getSelectedPiece: () => Piece | undefined;
  placeSelectedPieceInPosition: (position: PositionsTypesEnum) => void;
  selectPieceForOpponent: (pieceId: string) => void;
  resetPiecesSet: () => void;
}

interface PiecesSet extends PiecesSetProperties, PiecesSetMethods {}

/**
 * SCORE STATE
 */

interface ScoresProperties {
  player1Victories: number;
  player2Victories: number;
  draws: number;
}

interface ScoresMethods {
  addPlayer1Victory: () => void;
  addPlayer2Victory: () => void;
  addDraw: () => void;
  resetScores: () => void;
}

interface Scores extends ScoresProperties, ScoresMethods {}
