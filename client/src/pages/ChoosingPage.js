import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import RouletteButton from "../components/RouletteButton";
import FilterButton from "../components/FilterButton";

// display: flex;
// flex-direction: column;
// justify-content: center;
// grid-area: content;
// margin-bottom: 15vh;
// `;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: content;
  padding-top: 10%;
  margin: 0 15%;
  gap: 50%;
`;

export default function ChoosingPage() {
  return (
    <>
      <Div>
        <Link to="/random" label="random">
          <RouletteButton />
        </Link>
        <Link to="/select" label="select">
          <FilterButton />
        </Link>
      </Div>
      <BackButton />
    </>
  );
}
