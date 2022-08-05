import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AppStateProvider from "./state";

import Navigation from "./components/Navigation/Navigation";

import Game from "./components/Game";

function App() {
  return (
    <>
      <AppStateProvider>
        <Navigation />
        <Game />
      </AppStateProvider>
    </>
  );
}

export default App;
