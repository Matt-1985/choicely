import React from "react";
import styled from "styled-components/macro";
import restaurant from "../stories/assets/restaurant.png";

const DesicionCardContainer = styled.div`
  margin: 0 10vw;
  height: 45vh;
  width: 15vw;
  border: 1px solid grey;
  display: grid;
  grid-template-rows: auto auto 3fr;
`;

const DesicionImage = styled.img`
  height: auto;
  width: 100%;
`;

const DesicionHeader = styled.h2`
  text-align: center;
  padding-top: 10px;
  font-weight: 800;
  font-size: 15px;
`;

const DesicionInfo = styled.p`
  text-align: center;
  padding: 10px 20px;
  font-size: 14px;
`;

export default function Card() {
  return (
    <DesicionCardContainer>
      <DesicionImage src={restaurant} alt="restaurant" />
      <DesicionHeader>LOREM IPSUM</DesicionHeader>
      <DesicionInfo>
        Est duis labore dolor ut consectetur eu do ex anim tempor.
      </DesicionInfo>
    </DesicionCardContainer>
  );
}
