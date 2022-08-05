import AppStateProvider from "./AppStateProvider";

import { useGameDataContext } from "./gameData";
import { usePiecesSetContext } from "./piecesSet";
import { useScoresContext } from "./scores";

export default AppStateProvider;

export { 
    useGameDataContext,
    usePiecesSetContext,
    useScoresContext
}