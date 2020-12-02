import React from "react";
import styled from "styled-components/macro";
import SelectBox from "../components/SelectBox";
import NavBar from "../components/NavBar";

const SelectBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: content;
  margin-bottom: 15vh;
  padding: 15%;
  gap: 4vh;
`;

export default function SelectBoxScreen() {
  return (
    <>
      <SelectBoxContainer>
        <SelectBox />
        <SelectBox />
        <SelectBox />
      </SelectBoxContainer>
      <NavBar />
    </>
  );
}
