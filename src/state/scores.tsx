import React, {
  useState,
  createContext,
  useContext,
  PropsWithChildren,
} from "react";

/**
 * SCORE STATE
 */

// CONTEXT

const ScoresContext = createContext<Scores | null>(null);

// PROVIDER

export const ScoresContextProvider = (props: PropsWithChildren) => {
  const [player1Victories, setPlayer1Victories] = useState(0);
  const [player2Victories, setPlayer2Victories] = useState(0);
  const [draws, setDraws] = useState(0);
  function addPlayer1Victory() {
    setPlayer1Victories((state) => state + 1);
  }
  function addPlayer2Victory() {
    setPlayer2Victories((state) => state + 1);
  }
  function addDraw() {
    setDraws((state) => state + 1);
  }
  function resetScores() {
    setPlayer1Victories(0);
    setPlayer2Victories(0);
    setDraws(0);
  }
  const scoreStateObject: Scores = {
    player1Victories,
    player2Victories,
    draws,

    addPlayer1Victory,
    addPlayer2Victory,
    addDraw,
    resetScores,
  };
  return (
    <ScoresContext.Provider value={scoreStateObject}>
      {props.children}
    </ScoresContext.Provider>
  );
};

// HOOK

export function useScoresContext(): Scores {
  const scoresContext = useContext(ScoresContext);
  return scoresContext as Scores;
}

// ....
