import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

const FinalCardContainer = styled.div`
  margin: 0 10vw;
  height: 65vh;
  width: 45vw;
  border: 1px solid grey;
  display: grid;
  grid-template-rows: auto auto 3fr;
`;

const FinalImage = styled.img`
  height: auto;
  width: 100%;
`;

const FinalHeader = styled.h2`
  text-align: center;
  padding-top: 10px;
  font-weight: 800;
  font-size: 15px;
`;

const FinalInfo = styled.p`
  text-align: center;
  padding: 10px 20px;
  font-size: 14px;
`;

// const FinalLink = styled.a`
//   padding: 10px 20px;
//   text-decoration: none;
//   text-align: center;
// `;

export default function DetailCard({
  restaurantImg,
  restaurantName,
  restaurantAddress,
  restaurantContact,
}) {
  return (
    <FinalCardContainer>
      <FinalImage src={restaurantImg} alt="restaurant" />
      <FinalHeader>{restaurantName}</FinalHeader>
      <FinalInfo>
        {restaurantAddress.street}, {restaurantAddress.zipcode}
      </FinalInfo>
      <FinalInfo>
        {restaurantContact.phone}, {restaurantContact.web}
      </FinalInfo>
    </FinalCardContainer>
  );
}

DetailCard.propTypes = {
  restaurantImg: PropTypes.string,
  restaurantName: PropTypes.string,
  restaurantAddress: PropTypes.object,
  restaurantContact: PropTypes.object,
};
