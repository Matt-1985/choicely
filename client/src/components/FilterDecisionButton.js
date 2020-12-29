import React from "react";
import styled from "styled-components/macro";
import { ButtonStyle, ButtonOutline } from "../GlobalStyle";

const Button = styled.button`
  ${ButtonStyle}
  background-color: var(--decision-filter-color);
`;

const Div = styled.div`
  ${ButtonOutline}
`;

export default function FilterDecisionButton() {
  return (
    <Button>
      Filter zum Glück
      <Div />
    </Button>
  );
}
