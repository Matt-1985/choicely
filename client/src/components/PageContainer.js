import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 85px 1fr 85px;
  place-items: center;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;
