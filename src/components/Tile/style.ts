import styled from "styled-components";

export const StyledTile = styled.div`
  border-radius: 1rem;
  width: 12rem;
  height: 12rem;
  margin: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(100, 30, 15, 0.06);

  ${(props: {
    selectable?: boolean;
    player?: CurrentPlayersTypes;
    containsWinningPiece?: boolean;
    lastWinner?: CurrentPlayersTypes | "DRAW";
  }) =>
    props.containsWinningPiece
      ? props.lastWinner === 1
        ? "background-color: rgba(0, 0, 255, 0.2);"
        : "background-color: rgba(255, 0, 0, 0.2);"
      : props.selectable
      ? `
    &:hover {
      background-color: ${
        props.player === 1 ? "rgba(0, 0, 255, 0.2)" : "rgba(255, 0, 0, 0.2)"
      };
    }
    
    &:active {
      background-color: ${props.player === 1 ? "#520052c7" : "#ff4343b6"};
    }`
      : ""}
`;