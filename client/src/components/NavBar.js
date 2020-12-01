import React from "react";
import styled from "styled-components/macro";
import BackButton from "../stories/assets/back_btn.svg";
import RefreshButton from "../stories/assets/refresh_btn.svg";

const Navigation = styled.footer`
  border: 1px solid grey;
  height: 75px;
  width: 20vw;
  padding: 5px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;

  img {
    :active {
      opacity: 0.6;
    }
  }
`;

export default function NavBar() {
  return (
    <Navigation>
      <a href="/">
        <img src={BackButton} alt="back" />
      </a>
      <a href="/">
        <img src={RefreshButton} alt="back" />
      </a>
    </Navigation>
  );
}
