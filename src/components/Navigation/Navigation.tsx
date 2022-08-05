import React, { useState } from "react";
import { Navbar, Container, Modal, Nav } from "react-bootstrap";

function Navigation() {
  const [showRules, setShowRules] = useState(false);

  function handleOpenRulesModal() {
    setShowRules(true);
  }

  function handleCloseRulesModal() {
    setShowRules(false);
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Quarto App</Navbar.Brand>
        </Container>
        <Nav>
          <Nav.Link
            href="#"
            onClick={() => handleOpenRulesModal()}
            className="m-3"
          >
            Rules
          </Nav.Link>
        </Nav>
      </Navbar>

      <Modal show={showRules} onHide={() => handleCloseRulesModal()}>
        <Modal.Header closeButton>
          <h3>Game Rules</h3>
        </Modal.Header>
        <Modal.Body>
          <div>
            Both players share all 16 pieces, which are unique, differing in
            four attributes: <b>size</b> (big or small), <b>fill</b> (holed or
            filled), <b>color</b> (white or brown) and <b>shape</b> (square or
            circle).
          </div>
          <br />
          <div>
            The first player begins by selecting a piece for the opponent to
            place on the board. Next, the second player places designated piece
            in any avaiable tile and then chooses another piece for the
            opponent's next move.
          </div>
          <br />
          <div>
            The game continues until a player places a piece that completes a
            sequence of four pieces (row-wise, column-wise or in any diagonal
            line) which all share at least one common attribute (e.g.: four
            white pieces, four big pieces, or four circles, etc.). This player
            is the winner of the game. If all pieces are placed in the board and
            no sequence of common pieces are done, the game is a draw.
          </div>
          <br />
          <div>
            In the hard game mode, the players can also win by placing the last
            piece in any 2x2 square which all four pieces share some attribute
            in common.
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navigation;
