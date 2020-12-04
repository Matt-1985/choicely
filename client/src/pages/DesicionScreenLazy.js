import styled from "styled-components/macro";
import React from "react";
import Card from "../components/Card";
import NavBar from "../components/NavBar";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: content;
  margin-bottom: 5vh;
  padding: 15%;
  gap: 8px;
`;

export default function DesicionScreenLazy() {
  return (
    <>
      <CardContainer>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardContainer>
      <NavBar />
    </>
  );
}
