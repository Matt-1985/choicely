import React from "react";
import back_btn from "../assets/back_btn.svg";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

const PrimaryButton = styled.button`
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

export default function BackButton() {
  const history = useHistory();
  return (
    <PrimaryButton onClick={() => history.goBack()}>
      <img src={back_btn} className="" alt="back button" />
    </PrimaryButton>
  );
}
