import React from "react";
import styled from "styled-components/macro";
import FirstActionButton from "../components/FirstActionButton";
import { Link } from "react-router-dom";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: content;
  place-items: center;
`;

export default function StartPage() {
  return (
    <Div>
      <Link to="/desicion" label="desicion">
        <FirstActionButton />
      </Link>
    </Div>
  );
}
