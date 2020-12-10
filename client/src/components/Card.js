import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

const DesicionCardContainer = styled.div`
  margin: 0 10vw;
  /* height: 45vh;
  width: 15vw; */
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

export default function Card({
  restaurantImg,
  restaurantName,
  restaurantDiet,
  restaurantCuisine,
}) {
  const diet = restaurantDiet.toString();
  return (
    <DesicionCardContainer>
      <DesicionImage src={restaurantImg} alt="restaurant" />
      <DesicionHeader>{restaurantName}</DesicionHeader>
      <DesicionInfo>{`${diet}, ${restaurantCuisine}`}</DesicionInfo>
    </DesicionCardContainer>
  );
}

Card.propTypes = {
  restaurantImg: PropTypes.string,
  restaurantName: PropTypes.string,
  restaurantDiet: PropTypes.array,
  restaurantCuisine: PropTypes.string,
};
