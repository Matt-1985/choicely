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

  useEffect(() => {
    async function getData() {
      const restaurants = await getRandomRestaurants();
      setRandomRestaurants(restaurants);
    }
    getData();
  }, [buttonClick]);

  return (
    <>
      <h1>BON APPETIT</h1>
      <ListItems listOfItems={randomRestaurants} background={true} />

      <NavBar onClick={changeButtonClick} />
    </>
  );
}
