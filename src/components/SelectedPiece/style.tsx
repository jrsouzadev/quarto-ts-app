import styled from "styled-components";
import { StyledTile } from "../Tile";

export const StyledSelectedPiece = styled(StyledTile)`
  margin-right: 5rem;
  /* background-color: #00800017; */
  ${(props: { player?: any }) => {
    return `background-color: ${
      props.player === 1 ? "rgba(0, 0, 255, 0.2)" : "rgba(255, 0, 0, 0.2)"
    }`;
  }}
`;
