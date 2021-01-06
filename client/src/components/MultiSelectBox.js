import MultiSelect from "react-multiple-select-dropdown-lite";
import "../components/MultiSelect.css";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

const H4 = styled.h4`
  text-align: center;
`;

export default function MultiSelectBox({ onChange, options }) {
  return (
    <div className="app">
      <div className="preview-values">
        <H4>Der Filter zum Glück</H4>
      </div>
      <MultiSelect
        onChange={onChange}
        options={options}
        className="multiselect"
        placeholder="Wähle bis zu 3 Optionen"
      />
    </div>
  );
}

MultiSelectBox.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
