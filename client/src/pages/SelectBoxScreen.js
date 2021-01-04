import React, { useState, useEffect } from "react";
import MultiSelectBox from "../components/MultiSelectBox";
import { getRestaurants } from "../api/restaurants";
import { options } from "../components/options";
import ListItems from "../components/ListItems";
import NavBar from "../components/NavBar";
// import { useHistory } from "react-router-dom";

export default function SelectBoxScreen() {
  const [value, setValue] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [refresh, setRefresh] = useState(null);

  const handleOnChange = (val) => {
    setValue(val);
  };

  const changeButtonClick = () => {
    setRefresh(refresh + 1);
  };

  // const history = useHistory(() => history.goBack());

  useEffect(() => {
    if (!value) {
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
        options={options}
        placeholder="Wähle aus"
        className="multiselect"
      />

      <ListItems listOfItems={filteredRestaurants} />

      <NavBar onClick={changeButtonClick} />
    </>
  );
}
