import React, { useState } from "react";
import styled from "styled-components/macro";
import SelectBox from "../components/SelectBox";
import BackButton from "../components/BackButton";

const SelectBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: content;
  padding: 15%;
  gap: 35px;
`;

export default function SelectBoxScreen() {
  const [select1, setSelect1] = useState(null);
  const [select2, setSelect2] = useState(null);
  const [select3, setSelect3] = useState(null);

  const nextPage = (e) => {
    switch (e.target.name) {
      case "1":
        setSelect1(e.target.value);
        break;
      case "2":
        setSelect2(e.target.value);
        break;
      case "3":
        setSelect3(e.target.value);
        break;
      default:
        console.log("shit");
    }
  };

  return (
    <>
      {select1 && console.log({ select1 })}
      {select2 && console.log({ select2 })}
      {select3 && console.log({ select3 })}
      <SelectBoxContainer>
        <SelectBox onChange={nextPage} name="1" />
        <SelectBox onChange={nextPage} name="2" />
        <SelectBox onChange={nextPage} name="3" />
      </SelectBoxContainer>
      <BackButton />
    </>
  );
}
