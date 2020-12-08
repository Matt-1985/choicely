import React, { useState } from "react";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "../components/MultiSelect.css";

const MultiSelectBox = () => {
  const [value, setValue] = useState("");

  const handleOnChange = (val) => {
    setValue(val);
  };
  const options = [
    { label: "Fleisch", value: "Fleisch" },
    { label: "Vegetarisch", value: "Vegetarisch" },
    { label: "Vegan", value: "Vegan" },
    { label: "Asiatisch", value: "Asiatisch" },
    { label: "Amerikanisch", value: "Amerikanisch" },
    { label: "Deutsch", value: "Deutsch" },
    { label: "Europäisch", value: "Europäisch" },
    { label: "Lateinamerikanisch", value: "Lateinamerikanisch" },
    { label: "Afrikanisch", value: "Afrikanisch" },
    { label: "Bestellen", value: "Bestellen" },
    { label: "Kochen", value: "Kochen" },
  ];

  return (
    <div className="app">
      <div className="preview-values">
        <h4>Der Filter zum Glück</h4>
      </div>
      <MultiSelect
        onChange={handleOnChange}
        options={options}
        placeholder={"Wähle aus"}
        className="multiselect"
      />
    </div>
  );
};

export default MultiSelectBox;
