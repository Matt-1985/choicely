import React from "react";
import styled from "styled-components/macro";
import BackButton from "../assets/back_btn.svg";
import RefreshButton from "../assets/refresh_btn.svg";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const Navigation = styled.footer`
  border: none;
  width: 100%;
  padding: 5px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  grid-area: footer;
  background-color: var(--primary-color);
  img {
    :active {
      opacity: 0.6;
    }
  }
`;

export default function NavBar({ onClick }) {
  const history = useHistory();

  return (
    <Navigation>
      <img src={BackButton} onClick={() => history.goBack()} alt="back" />

      <img src={RefreshButton} onClick={onClick} alt="back" />
    </Navigation>
  );
}

NavBar.propTypes = {
  onClick: PropTypes.func,
};
