import styled from "styled-components/macro";
import React from "react";
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
    <>
      <DetailCardContainer>
        <DetailCard />
      </DetailCardContainer>
      <NavBar />
    </>
  );
}
