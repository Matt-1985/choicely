import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
// import SelectBox from "../components/SelectBox";
import NavBar from "../components/NavBar";
import MultiSelectBox from "../components/MultiSelectBox";
import { getRandomRestaurants } from "../api/randomRestaurants";

const SelectBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: content;
  padding: 15%;
  gap: 35px;
`;

export default function SelectBoxScreen() {
  const [outputMultiSelectBox, setOutputMultiSelectBox] = useState("");
  const [outputNavBar, setOutputNavBar] = useState("");
  // const [contentListItems, setContentListItems] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  const [reloadRestaurants, setRefreshRestaurants] = useState(null);
  const [buttonClick, setButtonClick] = useState("");

  const refreshOnClick = () => {
    setButtonClick("clicked");
    setRefreshRestaurants("reload");
  };

  useEffect(() => {
    if (!buttonClick) {
      return;
    }
    async function refreshRestaurants() {
      const newRestaurants = await getRandomRestaurants();
      setRefreshRestaurants(newRestaurants);
    }
    setButtonClick("");
    refreshRestaurants();
  }, [reloadRestaurants]);

  return (
    <>
      <SelectBoxContainer>
        <MultiSelectBox />
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
