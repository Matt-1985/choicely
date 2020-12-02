import styled from "styled-components/macro";
import React from "react";
import { PageContainer } from "../components/PageContainer";
import DetailCard from "../components/DetailCard";
import NavBar from "../components/NavBar";

const DetailCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: content;
  margin-bottom: 10vh;
  padding: 15%;
`;

export default function DetailCardScreenLazy() {
  return (
    <PageContainer>
      <DetailCardContainer>
        <DetailCard />
      </DetailCardContainer>
      <NavBar />
    </PageContainer>
  );
}
