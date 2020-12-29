import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

const FlipCardContainer = styled.div`
  /* position: absolute;
  z-index: 3; */
  background-color: transparent;
  margin: 0 10vw;
  height: 300px;
  width: 300px;
  /* border: 1px solid #f1f1f1; */
  border-radius: 12px;
  display: grid;
  grid-template-rows: auto auto 3fr;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  :hover {
    transform: rotateY(180deg);
  }
`;

const FlipCardFront = styled.div`
  position: absolute;
  /* width: 100%;
  height: 100%; */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

const FlipCardBack = styled.div`
  position: absolute;
  /* width: 100%;
  height: 100%; */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const FlipImage = styled.img`
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  height: 150px;
  width: 100%;
  object-fit: cover;
`;

const FlipHeader = styled.h2`
  text-align: center;
  padding-top: 10px;
  font-weight: 800;
  font-size: 15px;
`;

const FlipInfo = styled.a`
  text-align: center;
  padding: 10px 20px;
  font-size: 14px;
`;

export default function FlipCard({
  restaurantImg,
  restaurantName,
  restaurantDiet,
  restaurantCuisine,
  restaurantAddress,
  restaurantContact,
}) {
  const diet = restaurantDiet.toString();
  return (
    <FlipCardContainer>
      <FlipCardInner>
        <FlipCardFront>
          <FlipImage src={restaurantImg} alt="restaurant" />
          <FlipHeader>{restaurantName}</FlipHeader>
          <FlipInfo>{`${diet}, ${restaurantCuisine}`}</FlipInfo>
        </FlipCardFront>
        <FlipCardBack>
          <FlipImage src={restaurantImg} alt="restaurant" />
          <FlipHeader>{restaurantName}</FlipHeader>
          <FlipInfo>
            {restaurantAddress.street}, {restaurantAddress.zipcode}
          </FlipInfo>
          <FlipInfo>
            {restaurantContact.phone}, {restaurantContact.web}
          </FlipInfo>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCardContainer>
  );
}

FlipCard.propTypes = {
  restaurantImg: PropTypes.string,
  restaurantName: PropTypes.string,
  restaurantDiet: PropTypes.array,
  restaurantCuisine: PropTypes.string,
  restaurantAddress: PropTypes.object,
  restaurantContact: PropTypes.object,
};