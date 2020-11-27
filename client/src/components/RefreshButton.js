import React from "react";
import refresh_btn from "../stories/assets/refresh_btn.svg";
import styled from "styled-components/macro";

const SecondaryButton = styled.button`
  border: none;
  background: transparent;
`;

export default function RefreshButton() {
  return (
    <SecondaryButton>
      <img src={refresh_btn} className="" alt="refresh button" />
    </SecondaryButton>
  );
}
