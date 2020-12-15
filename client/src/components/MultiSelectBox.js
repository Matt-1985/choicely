/* eslint-disable */

// import React, { useEffect, useState } from "react";
import MultiSelect from "react-multiple-select-dropdown-lite";
// import { getRestaurants } from "../api/restaurants";
import "../components/MultiSelect.css";

// import PropTypes from "prop-types";

// import Card from "./Card";
// import DetailCard from "./DetailCard";

//bei der filter auswahl soll die richtige karte angezeigt werden,
// anfrage der filteroptionen wird an api gesendet und die passenden ergebnisse werden ausgegeben

export default function MultiSelectBox({ onChange, options }) {
  // const [value, setValue] = useState("");
  // const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  // const handleOnChange = (val) => {
  //   setValue(val);
  // };

  // evtl auslagern der optionen? Bei Sina im Code checken
  // bei Tic Tac Toe project nachschauen > useState

  // const options = [
  //   { label: "Fleisch", value: "1" },
  //   { label: "Vegetarisch", value: "2" },
  //   { label: "Vegan", value: "3" },
  //   { label: "Asiatisch", value: "Asiatisch" },
  //   { label: "Amerikanisch", value: "Amerikanisch" },
  //   { label: "Deutsch", value: "Deutsch" },
  //   { label: "Europäisch", value: "Europäisch" },
  //   { label: "Lateinamerikanisch", value: "Lateinamerikanisch" },
  //   { label: "Afrikanisch", value: "Afrikanisch" },
  // ];
  // useEffect(() => {
  //   // event.prevent.default();
  //   if (!value) {
  //     return;
  //   }
  //   async function getData() {
  //     const restaurants = await getRestaurants(value);
  //     console.log(restaurants);
  //     setFilteredRestaurants(restaurants);
  //   }
  //   getData();
  // // }, [value]);
  // const multiSelectOptions = options.toString();

  return (
    <div className="app">
      <div className="preview-values">
        <h4>Der Filter zum Glück</h4>
      </div>
      <MultiSelect onChange={onChange} options={options} />
    </div>
  );
}

// MultiSelect.propTypes = {
//   onChange: PropTypes.func,
//   options: PropTypes.array,
//   placeholder: PropTypes.string,
//   className: PropTypes.string,
// };

// export default MultiSelectBox;
