import MultiSelect from "react-multiple-select-dropdown-lite";
import "../components/MultiSelect.css";

import PropTypes from "prop-types";

export default function MultiSelectBox({ onChange, options }) {
  return (
    <div className="app">
      <div className="preview-values">
        <h4>Der Filter zum Glück</h4>
      </div>
      <MultiSelect onChange={onChange} options={options} />
    </div>
  );
}

MultiSelectBox.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
