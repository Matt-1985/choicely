import React from "react";
import back_btn from "../stories/assets/back_btn.svg";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

// const icons = {
//   back: {
//     src={back_btn},
//   },
//   refresh: {
//     src={refresh_btn},
//   },

// };

const PrimaryButton = styled.button`
  border: none;
  background: transparent;
  grid-area: footer;
  margin: 0 1rem;
  :active {
    opacity: 0.6;
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
