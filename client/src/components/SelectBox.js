import React from "react";
import styled from "styled-components/macro";

export const SelectField = styled.select`
  border: none;
  border-bottom: 1px solid grey;
  background: tranparent;
`;

export default function SelectBox() {
  return (
    <SelectField>
      <option value="" hidden>
        Wähle aus
      </option>
      <option value="1">Fleisch</option>
      <option value="2">Vegetarisch</option>
      <option value="3">Vegan</option>
    </SelectField>
  );
}
