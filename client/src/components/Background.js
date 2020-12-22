import React from "react";
import styled from "styled-components";

const BackgroundContainer = styled.div`
  position: absolute;
  z-index: 2;
  width: 70%;
  height: 80%;
  display: grid;
  grid-row: 1;
  grid-column: 1;
`;

const BackgroundDiv = styled.div`
  width: 200px;
  height: 500px;
  border: none;
  border-radius: 12px;
  background-color: var(--decision-filter-color);
`;

const Frame = styled.div`
  position: absolute;
  right: 6px;
  left: -6px;
  top: 6px;
  width: 200px;
  height: 500px;
  border: 1px solid #607a94;
  border-radius: 12px;
  opacity: 3;
  z-index: auto;
  display: flex;
`;

export default function Background() {
  return (
    <BackgroundContainer>
      <BackgroundDiv>
        <Frame></Frame>
      </BackgroundDiv>
    </BackgroundContainer>
  );
}
