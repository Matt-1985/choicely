import React from "react";
import styled from "styled-components/macro";

const DecisionButton = styled.button`
  position: relative;
  width: 200px;
  height: 100px;
  border: none;
  border-radius: 12px;
  background-color: var(--decision-1-color);
  color: #607a94;
  :active {
    opacity: 0.6;
  }
`;

const Outline1 = styled.div`
  position: absolute;
  right: 6px;
  left: -6px;
  top: 6px;
  width: 200px;
  height: 100px;
  border: 1px solid #607a94;
  border-radius: 12px;
  opacity: 3;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.6s;
  :hover {
    position: absolute;
    right: -6px;
    left: 6px;
    top: -6px;
  }
`;

export default function FinalDecisionButton() {
  return (
    <DecisionButton>
      1-Klick-Decision
      <Outline1 />
    </DecisionButton>
  );
}
