import React, { useState, useEffect } from "react";
import MultiSelectBox from "../components/MultiSelectBox";
import { getRestaurants } from "../api/restaurants";
import { options } from "../components/options";
import ListItems from "../components/ListItems";
import NavBar from "../components/NavBar";

export default function SelectBoxScreen() {
  const [value, setValue] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [refresh, setRefresh] = useState(null);
  const [customOptions, setCustomOptions] = useState(options);

  const handleOnChange = (val) => {
    let selectedOptions = [];
    let valSplit = val.split(",");
    if (valSplit.length >= 3) {
      selectedOptions = valSplit.map((item) => {
        return { label: item.split(":")[1], value: item };
      });
      setCustomOptions(selectedOptions);
    } else {
      setCustomOptions(options);
    }
    setValue(val);
  };

  const changeButtonClick = () => {
    setRefresh(refresh + 1);
  };

  useEffect(() => {
    if (!value) {
      setFilteredRestaurants(null);
      return;
    }
    async function getData() {
      const restaurants = await getRestaurants(value);
      setFilteredRestaurants(restaurants);
    }
    getData();
  }, [value]);

  useEffect(() => {
    if (!refresh) {
      return;
    }
    async function refreshRestaurants() {
      const newRestaurants = await getRestaurants(value);
      setFilteredRestaurants(newRestaurants);
    }

    refreshRestaurants();
  }, [refresh, value]);

  return (
    <>
      <MultiSelectBox
        onChange={handleOnChange}
        options={customOptions}
        placeholder="Wähle aus"
        className="multiselect"
      />
      <ListItems listOfItems={filteredRestaurants} />

      <NavBar onClick={changeButtonClick} />
    </>
  );
}
