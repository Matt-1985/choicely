import React from "react";
import styled from "styled-components/macro";

const ActionButton = styled.button`
  position: relative;
  width: 200px;
  height: 200px;
  border: none;
  border-radius: 50%;
  background-color: var(--decision-primary-color);
  :hover {
    opacity: 0.6;
  }
  span {
    color: #fbfbfb;
  }
`;

const Outline = styled.div`
  position: absolute;
  right: 6px;
  left: -6px;
  top: 6px;
  width: 200px;
  height: 200px;
  border: 1px solid #607a94;
  border-radius: 50%;
  opacity: 3;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function FirstActionButton() {
  return (
    <ActionButton>
      <Outline />
      <span>Was gibts heute zu essen?</span>
    </ActionButton>
  );
}
