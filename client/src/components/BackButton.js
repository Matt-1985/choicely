import React from "react";
import back_btn from "../stories/assets/back_btn.svg";
import styled from "styled-components/macro";

const PrimaryButton = styled.button`
  border: none;
  background: transparent;
`;

export default function BackButton() {
  return (
    <PrimaryButton>
      <img src={back_btn} className="" alt="back button" />
    </PrimaryButton>
  );
}
