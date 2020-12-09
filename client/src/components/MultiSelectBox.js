import React, { useEffect, useState } from "react";
import MultiSelect from "react-multiple-select-dropdown-lite";
import { getRandomRestaurant } from "../api/restaurants";
import "../components/MultiSelect.css";
import Card from "./Card";

//bei der filter auswahl soll die richtige karte angezeigt werden,
// anfrage der filteroptionen wird an api gesendet und die passenden ergebnisse werden ausgegeben

const MultiSelectBox = () => {
  const [value, setValue] = useState("");
  // const [rImg, setRImg] = useState("");
  // const [rName, setRName] = useState("");
  // const [rDiet, setRDiet] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

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
  ];
  useEffect(() => {
    // event.prevent.default();
    if (!value) {
      return;
    }
    async function getData() {
      const restaurants = await getRandomRestaurant(value);

      setFilteredRestaurants(restaurants);
    }
    getData();
  }, [value]);

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
      {filteredRestaurants?.map((filteredRestaurant) => (
        <Card
          key={filteredRestaurant.restaurant_id}
          restaurantImg={filteredRestaurant.img}
          restaurantName={filteredRestaurant.name}
          restaurantDiet={filteredRestaurant.diet}
        />
      ))}

      {/* <Card
        restaurantImg={rImg}
        restaurantName={rName}
        restaurantDiet={rDiet}
      /> */}
    </div>
  );
};

export default MultiSelectBox;
