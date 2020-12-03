import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

export const SelectField = styled.select`
  border: none;
  border-bottom: 1px solid grey;
  background: tranparent;
`;

export default function SelectBox({ onChange, name }) {
  return (
    <SelectField onChange={onChange} name={name}>
      <option value="" hidden>
        Wähle aus
      </option>
      <option value="1">Fleisch</option>
      <option value="2">Vegetarisch</option>
      <option value="3">Vegan</option>
    </SelectField>
  );
}

SelectBox.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
};
