import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import NavBar from "../components/NavBar";
import MultiSelectBox from "../components/MultiSelectBox";
import { getRestaurants } from "../api/restaurants";
import Card from "../components/Card";
import DetailCard from "../components/DetailCard";
import { options } from "../components/options";

const SelectBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: content;
  padding: 15%;
  gap: 35px;
`;

export default function SelectBoxScreen() {
  const [value, setValue] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [reloadRestaurants, setReloadRestaurants] = useState(null);
  const [buttonClick, setButtonClick] = useState("");

  const handleOnChange = (val) => {
    setValue(val);
  };

  console.log(reloadRestaurants);

  const refreshOnClick = () => {
    setButtonClick("clicked");
    setReloadRestaurants("reload");
  };

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
    if (!buttonClick) {
      return;
    }
    async function refreshRestaurants() {
      const newRestaurants = await getRestaurants(value);
      setFilteredRestaurants(newRestaurants);
    }
    setButtonClick(null);
    refreshRestaurants();
  }, [buttonClick, value]);

  return (
    <>
      <MultiSelectBox
        onChange={handleOnChange}
        options={options}
        placeholder="Wähle aus"
        className="multiselect"
      />

      <SelectBoxContainer>
        {filteredRestaurants?.map((filteredRestaurant) => (
          <Card
            key={filteredRestaurant._id}
            restaurantImg={filteredRestaurant.img}
            restaurantName={filteredRestaurant.name}
            restaurantDiet={filteredRestaurant.diet}
            restaurantCuisine={filteredRestaurant.cuisine}
          />
        ))}

        {filteredRestaurants?.map((filteredRestaurant) => (
          <DetailCard
            key={filteredRestaurant._id}
            restaurantImg={filteredRestaurant.img}
            restaurantName={filteredRestaurant.name}
            restaurantAddress={filteredRestaurant.address}
            restaurantContact={filteredRestaurant.contact}
          />
        ))}
      </SelectBoxContainer>

      <NavBar onClick={refreshOnClick} />
    </>
  );
}
