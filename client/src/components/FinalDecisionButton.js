import React from "react";
import styled from "styled-components/macro";
import { ButtonStyle, ButtonOutline } from "../GlobalStyle";

const Button = styled.button`
  ${ButtonStyle};
  margin-bottom: 50px;
`;

const Div = styled.div`
  ${ButtonOutline}
`;

export default function FinalDecisionButton() {
  return (
    <Button>
      1-Klick-Decision
      <Div />
    </Button>
  );
}
