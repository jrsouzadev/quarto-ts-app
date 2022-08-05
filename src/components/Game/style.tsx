import styled from "styled-components";
import { Button } from "react-bootstrap";

export const StyledInfoText = styled.h3`
  margin: 2rem 2rem 5rem 2rem;
`;

export const BoardContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

export const StyledNewMatchButton = styled(Button)`
  font-size: 1.6rem;
  border-radius: 1rem;
  margin: 0.5rem;
  margin-right: 5rem;
  width: 12rem;
  height: 12rem;
`;
