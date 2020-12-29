import React from "react";
import styled from "styled-components/macro";
import BackButton from "../components/BackButton";
import FinalDesicionButton from "../components/FinalDecisionButton";
import FilterDesicionButton from "../components/FilterDecisionButton";

import { Link } from "react-router-dom";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: content;
  margin-bottom: 15vh;
  gap: 8vh;
`;

export default function DesicionPage() {
  return (
    <>
      <Div>
        <Link to="/random" label="random">
          <FinalDesicionButton />
        </Link>
        <Link to="/select" label="select">
          <FilterDesicionButton />
        </Link>
      </Div>
      <BackButton />
    </>
  );
}
