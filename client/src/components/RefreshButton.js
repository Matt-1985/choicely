import React from "react";
import refresh_btn from "../stories/assets/refresh_btn.svg";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

const SecondaryButton = styled.button`
  border: none;
  background: transparent;
  :active {
    opacity: 0.6;
  }
`;

export default function RefreshButton({ onClick }) {
  return (
    <SecondaryButton>
      <img src={refresh_btn} onClick={onClick} alt="refresh button" />
    </SecondaryButton>
  );
}

RefreshButton.propTypes = {
  onClick: PropTypes.func,
};
