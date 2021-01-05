import styled from "styled-components/macro";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import FlipCard from "../components/FlipCard";

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: content;
  padding-top: 15%;
  margin: 0 15%;
  gap: 100px;
`;

const BackgroundContainer = styled.div`
  margin: 20px 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-row: 1;
  grid-column: 1;
`;

const BackgroundDiv = styled.div`
  width: 100%;
  height: 92%;
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
