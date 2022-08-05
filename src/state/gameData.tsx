import { useState, createContext, useContext, PropsWithChildren } from "react";

/**
 * GAME DATA STATE
 */

const GameDataContext = createContext<GameData | null>(null);

export const GameDataContextProvider = (props: PropsWithChildren) => {
  const [player1Name, setPlayer1Name] = useState<string>("");
  const [player2Name, setPlayer2Name] = useState<string>("");
  const [hardMode, setHardMode] = useState<boolean>(false);
  const [hasGameStarted, setHasGameStarted] = useState<boolean>(false);
  const [currentPlayer, setCurrentPlayer] = useState<CurrentPlayersTypes>(1);
  const [currentGameStage, setCurrentGameStage] =
    useState<GameStagesTypes>("SELECTING_PIECE");
  const [isFirstMove, setIsFirstMove] = useState<boolean>(true);
  const [winningPiecesIds, setWinningPiecesIds] = useState<string[]>([]);
  const [lastWinner, setLastWinner] = useState<
    CurrentPlayersTypes | "DRAW" | undefined
  >(undefined);

  function startNewMatch(): void {
    setHasGameStarted(true);
    setCurrentPlayer(
      lastWinner === undefined
        ? 1
        : lastWinner === "DRAW"
        ? (Math.floor(Math.random() * 2 + 1) as CurrentPlayersTypes)
        : lastWinner
    );
    setCurrentGameStage("SELECTING_PIECE");
    setIsFirstMove(true);
    setWinningPiecesIds([]);
  }

  function setNextPlayer(): void {
    setCurrentPlayer((state) => (state === 1 ? 2 : 1));
  }

  function setNextGameStage(): void {
    setCurrentGameStage((state) => {
      if (state === "PLACING_PIECE") {
        return "SELECTING_PIECE";
      } else if (state === "SELECTING_PIECE") {
        return "PLACING_PIECE";
      } else return state;
    });
  }

  function setPastFirstMove(): void {
    setIsFirstMove(false);
  }

  function setGameFinished(gameEndData: GameEndData): void {
    setCurrentGameStage("END");
    setLastWinner(gameEndData.winner);
    setWinningPiecesIds(gameEndData.winningPiecesIds);
  }

  function resetGameData(): void {
    setPlayer1Name("");
    setPlayer2Name("");
    setHasGameStarted(false);
    setCurrentPlayer(1);
    setCurrentGameStage("SELECTING_PIECE");
    setIsFirstMove(true);
    setWinningPiecesIds([]);
    setLastWinner(undefined);
  }

  const gameDataObject: GameData = {
    player1Name,
    player2Name,
    hardMode,
    hasGameStarted,
    currentPlayer,
    currentGameStage,
    isFirstMove,
    winningPiecesIds,
    lastWinner,

    setPlayer1Name,
    setPlayer2Name,
    setHardMode,
    startNewMatch,
    setNextPlayer,
    setNextGameStage,
    setPastFirstMove,
    setGameFinished,
    resetGameData,
  };

  return (
    <GameDataContext.Provider value={gameDataObject}>
      {props.children}
    </GameDataContext.Provider>
  );
};

// HOOK

export function useGameDataContext(): GameData {
  const scoresContext = useContext(GameDataContext);
  return scoresContext as GameData;
}
