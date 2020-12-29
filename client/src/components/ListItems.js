import styled from "styled-components/macro";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import FlipCard from "../components/FlipCard";

const BoxContainer = styled.div`
  /* position: relative;
  z-index: 1; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: content;
  padding: 15%;
  gap: 100px;
`;

export default function ListItems({ listOfItems, changeButtonClick }) {
  //   const [reloadRestaurants, setReloadRestaurants] = useState(null);
  //   const [buttonClick, setButtonClick] = useState("");

  //   const refreshOnClick = () => {
  //     setButtonClick("clicked");
  //     setReloadRestaurants("reload");
  //   };

  //   useEffect(() => {
  //     if (!buttonClick) {
  //       return;
  //     }
  //     async function refreshRestaurants() {
  //       const newRestaurants = await getRestaurants(value);
  //       setFilteredRestaurants(newRestaurants);
  //     }
  //     setButtonClick(null);
  //     refreshRestaurants();
  //   }, [buttonClick, value]);

  return (
    <>
      <BoxContainer>
        {listOfItems?.map((item) => (
          <FlipCard
            key={item._id}
            restaurantImg={item.img}
            restaurantName={item.name}
            restaurantDiet={item.diet}
            restaurantCuisine={item.cuisine}
            restaurantAddress={item.address}
            restaurantContact={item.contact}
          />
        ))}
      </BoxContainer>
      <NavBar onClick={changeButtonClick} />
    </>
  );
}

ListItems.propTypes = {
  listOfItems: PropTypes.array,
  changeButtonClick: PropTypes.func,
};
