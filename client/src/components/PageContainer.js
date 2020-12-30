import styled from "styled-components";

export const PageContainer = styled.div`
  /* position: relative;
  z-index: 1; */
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 85px 1fr 100px;
  place-items: center;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;
