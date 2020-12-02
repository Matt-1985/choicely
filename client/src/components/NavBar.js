import React from "react";
import styled from "styled-components/macro";
import BackButton from "../stories/assets/back_btn.svg";
import RefreshButton from "../stories/assets/refresh_btn.svg";

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
