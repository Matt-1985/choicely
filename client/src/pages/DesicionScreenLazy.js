import styled from "styled-components/macro";
import React from "react";
import { PageContainer } from "../components/PageContainer";
import Card from "../components/Card";
import NavBar from "../components/NavBar";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: content;
  margin-bottom: 15vh;
  padding: 15%;
  gap: 4vh;
`;

export default function DesicionScreenLazy() {
  return (
    <PageContainer>
      <CardContainer>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardContainer>
      <NavBar />
    </PageContainer>
  );
}
