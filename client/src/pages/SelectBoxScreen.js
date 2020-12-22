import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import NavBar from "../components/NavBar";
import MultiSelectBox from "../components/MultiSelectBox";
import { getRestaurants } from "../api/restaurants";
import FlipCard from "../components/FlipCard";
// import Card from "../components/Card";
// import DetailCard from "../components/DetailCard";
import { options } from "../components/options";
// import Background from "../components/Background";

const SelectBoxContainer = styled.div`
  /* position: relative;
  z-index: 1; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: content;
  padding: 15%;
  gap: 100px;
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
          <FlipCard
            key={filteredRestaurant._id}
            restaurantImg={filteredRestaurant.img}
            restaurantName={filteredRestaurant.name}
            restaurantDiet={filteredRestaurant.diet}
            restaurantCuisine={filteredRestaurant.cuisine}
            restaurantAddress={filteredRestaurant.address}
            restaurantContact={filteredRestaurant.contact}
          />
        ))}

        {/* {filteredRestaurants?.map((filteredRestaurant) => (
          <DetailCard
            key={filteredRestaurant._id}
            restaurantImg={filteredRestaurant.img}
            restaurantName={filteredRestaurant.name}
            
          />
        ))} */}
      </SelectBoxContainer>

      <NavBar onClick={refreshOnClick} />
    </>
  );
}
