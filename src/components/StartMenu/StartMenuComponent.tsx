import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useGameDataContext } from "../../state";

function StartMenuComponent() {
  const {
    player1Name,
    player2Name,
    hardMode,
    setPlayer1Name,
    setPlayer2Name,
    setHardMode,
    startNewMatch,
  } = useGameDataContext();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (player1Name === "") setPlayer1Name("Player 1");
    if (player2Name === "") setPlayer2Name("Player 2");
    startNewMatch();
  }

  function handlePlayer1NameInputChange(event: React.ChangeEvent) {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    setPlayer1Name(target.value);
  }

  function handlePlayer2NameInputChange(event: React.ChangeEvent) {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    setPlayer2Name(target.value);
  }

  function handleHardModeInputChange() {
    setHardMode(!hardMode);
  }

  return (
    <>
      <Container>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="m-3">
            <Form.Label>Player 1 Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Player 1"
              value={player1Name}
              onChange={(e) => handlePlayer1NameInputChange(e)}
            />
          </Form.Group>
          <Form.Group className="m-3">
            <Form.Label>Player 2 Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Player 2"
              value={player2Name}
              onChange={(e) => handlePlayer2NameInputChange(e)}
            />
          </Form.Group>
          <Form.Check
            className="m-3"
            type="checkbox"
            checked={hardMode}
            onChange={() => handleHardModeInputChange()}
            label="Play in Hard Mode"
          />
          <Button type="submit" variant="primary">
            Start Game
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default StartMenuComponent;
