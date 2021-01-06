import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: inherit;
  display: grid;
  grid-template-rows: 85px 1fr 100px;
  place-items: center;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;
