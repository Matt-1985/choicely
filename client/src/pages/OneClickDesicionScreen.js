import { useState, useEffect } from "react";
import { getRandomRestaurants } from "../api/randomRestaurants";
import NavBar from "../components/NavBar";
import ListItems from "../components/ListItems";

export default function OneClickDesicionScreen() {
  const [randomRestaurants, setRandomRestaurants] = useState(null);
  const [buttonClick, setButtonClick] = useState(0);

  const changeButtonClick = () => {
    setButtonClick(buttonClick + 1);
  };

  //   useEffect(() => {
  //     if (!randomRestaurants) {
  //       return;
  //     }
  //     async function randomlyRestaurants() {
  //       const newRestaurants = await getRandomRestaurants();
  //       setRandomRestaurants(newRestaurants);
  //     }
  //   }, [randomRestaurants]);

  //   useEffect(() => {
  //     if (!buttonClick) {
  //       return;
  //     }
  //     async function refreshRestaurants() {
  //       const newRestaurants = await getRandomRestaurants();
  //       setFilteredRestaurants(newRestaurants);
  //     }
  //     setButtonClick(null);
  //     refreshRestaurants();
  //   }, [buttonClick]);
  useEffect(() => {
    async function getData() {
      const restaurants = await getRandomRestaurants();
      setRandomRestaurants(restaurants);
    }
    getData();
  }, [buttonClick]);

  return (
    <>
      <ListItems listOfItems={randomRestaurants} />
      <NavBar onClick={changeButtonClick} />
    </>
  );
}
