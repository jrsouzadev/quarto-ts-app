import styled from "styled-components";

export const StyledPiece = styled.div`
  position: relative;
  ${(props: { piece: Piece }) => `
    background-color: ${
      props.piece.fill === "HOLLOW"
        ? "transparent"
        : props.piece.color === "BROWN"
        ? "#984700"
        : "#ffe5cf"
    };
    border: ${
      props.piece.fill === "HOLLOW"
        ? props.piece.size === "BIG"
          ? "2.5rem"
          : "1.6rem"
        : "5px"
    } solid ${props.piece.color === "BROWN" ? "#984700" : "#ffe5cf"};
    border-radius: ${props.piece.shape === "CIRCLE" ? "50%" : "0.3rem"};
    outline: 10px solid ${
      props.piece.fill === "SOLID"
        ? "transparent"
        : props.piece.color === "BROWN"
        ? "#863f00"
        : "#d7c1adef"
    };
    height: ${props.piece.size === "BIG" ? "10rem" : "6rem"};
    width: ${props.piece.size === "BIG" ? "10rem" : "6rem"};
    outline-offset: ${props.piece.size === "BIG" ? "-2.5rem" : "-1.8rem"};
  `}
  margin: 1rem;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);

  &::before {
    content: "";

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 10rem;
    height: 10rem;
    background-color: transparent;

    ${(props: { piece: Piece }) => `

      position: absolute;
      top: ${props.piece.shape === "CIRCLE" ? "" : ""};
      left: ${props.piece.shape === "CIRCLE" ? "" : ""};

      border-radius: ${props.piece.shape === "CIRCLE" ? "50%" : "0.3rem"};
      outline: 10px solid ${
        props.piece.color === "BROWN" ? "#863f00" : "#d7c1adef"
      };
      outline-offset: ${props.piece.size === "BIG" ? "-8px" : "-2.5rem"};
  `}
  }
`;

export default StyledPiece;
