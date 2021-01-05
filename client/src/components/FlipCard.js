import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

const FlipCardContainer = styled.div`
  background-color: transparent;
  margin: 8vw;
  height: 300px;
  width: 250px;
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

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

const FlipCardBack = styled.div`
  position: absolute;

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const FlipCardImage = styled.img`
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  height: 150px;
  width: 100%;
  object-fit: cover;
`;

const FlipCardInfoContainer = styled.div`
  border: 2.5px solid var(--guidance-color);
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
`;

const FlipCardHeader = styled.h2`
  text-align: center;
  padding-top: 10px;
  font-weight: 800;
  font-size: 15px;
`;

const FlipCardInfo = styled.div`
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
  const hrefTel = "tel:" + restaurantContact.phone;
  const googleLink =
    "https://www.google.com/maps/search/?api=1&query=" +
    restaurantName +
    "," +
    restaurantAddress.street +
    "," +
    restaurantAddress.zipcode;
  return (
    <FlipCardContainer>
      <FlipCardInner>
        <FlipCardFront>
          <FlipCardImage src={restaurantImg} alt="restaurant" />
          <FlipCardInfoContainer>
            <FlipCardHeader>{restaurantName}</FlipCardHeader>
            <FlipCardInfo>{`${diet}, ${restaurantCuisine}`}</FlipCardInfo>
          </FlipCardInfoContainer>
        </FlipCardFront>
        <FlipCardBack>
          <FlipCardImage src={restaurantImg} alt="restaurant" />
          <FlipCardInfoContainer>
            <FlipCardHeader>{restaurantName}</FlipCardHeader>
            <FlipCardInfo>
              <a href={googleLink} rel="noreferrer" target="_blank">
                {restaurantAddress.street}, {restaurantAddress.zipcode}
              </a>
            </FlipCardInfo>
            <FlipCardInfo>
              <a href={hrefTel}>{restaurantContact.phone}</a>,{" "}
              <a href={restaurantContact.web} rel="noreferrer" target="_blank">
                {restaurantContact.web}
              </a>
            </FlipCardInfo>
          </FlipCardInfoContainer>
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
