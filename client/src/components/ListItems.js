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
  padding-top: 15%;
  margin: 0 15%;
  gap: 100px;
`;

const BackgroundContainer = styled.div`
  /* position: absolute;
  z-index: 1; */
  width: 100%;
  height: 100%;
  display: grid;
  grid-row: 1;
  grid-column: 1;
`;

const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
  background-color: ${(props) =>
    props.background
      ? "var(--decision-1-color)"
      : "var(--decision-filter-color)"};
`;

const Frame = styled.div`
  position: relative;
  right: 6px;
  left: -6px;
  top: 6px;
  width: 100%;
  height: 100%;
  border: 3px solid #607a94;
  border-radius: 12px;
  /* opacity: 3; */
  /* z-index: auto;
  display: flex; */
`;

export default function ListItems({
  listOfItems,
  changeButtonClick,
  background,
  goOnePageBack,
}) {
  let showListItems = "";

  if (listOfItems != null) {
    showListItems = (
      <BackgroundDiv background={background}>
        <Frame>
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
        </Frame>
      </BackgroundDiv>
    );
  }
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
        <BackgroundContainer>{showListItems}</BackgroundContainer>
      </BoxContainer>
      <NavBar onClick={changeButtonClick} goBack={goOnePageBack} />
    </>
  );
}

ListItems.propTypes = {
  listOfItems: PropTypes.array,
  changeButtonClick: PropTypes.func,
  style: PropTypes.string,
  background: PropTypes.bool,
  goOnePageBack: PropTypes.func,
};
