import React, { PropsWithChildren } from "react";

import { GameDataContextProvider } from "./gameData";
import { PiecesContextProvider } from "./piecesSet";
import { ScoresContextProvider } from "./scores";

function AppStateProvider(props: PropsWithChildren) {
  return (
    <>
      <GameDataContextProvider>
        <PiecesContextProvider>
          <ScoresContextProvider>{props.children}</ScoresContextProvider>
        </PiecesContextProvider>
      </GameDataContextProvider>
    </>
  );
}

export default AppStateProvider;
