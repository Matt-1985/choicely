import React from "react";
import back_btn from "../stories/assets/back_btn.svg";
import styled from "styled-components/macro";

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
  return (
    <PrimaryButton>
      <img src={back_btn} className="" alt="back button" />
    </PrimaryButton>
  );
}
