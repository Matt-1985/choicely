// import React, { useState } from "react";
import styled from "styled-components/macro";
// import SelectBox from "../components/SelectBox";
import BackButton from "../components/BackButton";
import MultiSelectBox from "../components/MultiSelectBox";

const SelectBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: content;
  padding: 15%;
  gap: 35px;
`;

export default function SelectBoxScreen() {
  //   const [select1, setSelect1] = useState(null);
  //   const [select2, setSelect2] = useState(null);
  //   const [select3, setSelect3] = useState(null);

  //   const nextPage = (e) => {
  //     switch (e.target.name) {
  //       case select1:
  //         setSelect1(e.target.value);
  //         break;
  //       case select2:
  //         setSelect2(e.target.value);
  //         break;
  //       case select3:
  //         setSelect3(e.target.value);
  //         break;
  //       default:
  //         console.log("test");
  //     }
  //   };

  return (
    <>
      <SelectBoxContainer>
        <MultiSelectBox />
      </SelectBoxContainer>
      <BackButton />
    </>
  );
}
