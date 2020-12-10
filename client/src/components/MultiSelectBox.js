import React, { useEffect, useState } from "react";
import MultiSelect from "react-multiple-select-dropdown-lite";
import { getRestaurants } from "../api/restaurants";
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
  // const [allRestaurants , setAllRestaurants] = useState()

  const handleOnChange = (val) => {
    setValue(val);
  };

  const options = [
    { label: "Fleisch", value: "1" },
    { label: "Vegetarisch", value: "2" },
    { label: "Vegan", value: "3" },
    { label: "Asiatisch", value: "Asiatisch" },
    { label: "Amerikanisch", value: "Amerikanisch" },
    { label: "Deutsch", value: "6" },
    { label: "Europäisch", value: "7" },
    { label: "Lateinamerikanisch", value: "8" },
    { label: "Afrikanisch", value: "9" },
  ];
  useEffect(() => {
    // event.prevent.default();
    if (!value) {
      return;
    }
    async function getData() {
      const restaurants = await getRestaurants(value);
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
          key={filteredRestaurant._id}
          restaurantImg={filteredRestaurant.img}
          restaurantName={filteredRestaurant.name}
          restaurantDiet={filteredRestaurant.diet}
          restaurantCuisine={filteredRestaurant.cuisine}
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
