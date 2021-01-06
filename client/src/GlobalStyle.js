import { createGlobalStyle, css } from "styled-components/macro";
import AtamiRegular from "../src/assets/fonts/AtamiRegular.otf";
import AtamiBold from "../src/assets/fonts/AtamiBold.otf";

const GlobalStyle = createGlobalStyle`
 *, *::after, *::before {
   box-sizing:border-box;
 }


 @font-face {
  font-family: "AtamiRegular";
  font-style: normal;
  font-weight: 400;
  src: url(${AtamiRegular});
 }

  @font-face {
  font-family: "AtamiBold";
  font-style: bold;
  font-weight: 600;
  src: url(${AtamiBold})
}

html, body {
  height:100vh;
  width:100vw;
  margin: 0;
  padding: 0;

}
 
 :root {
   --primary-color: #fbfbfb;
   --guidance-color: #0a335c;
   --decision-primary-color: #ff4477;
   --decision-1-color: #ffd17e;
   --decision-filter-color: #20f6ce;
   --input-placeholder-color: #607A94;
}

#root {
  height:100%;
}

body{
font-size: 18;
font-family: "AtamiRegular";
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
color: var(--guidance-color);
background-color: var(--primary-color)

}

h1, span {
font-family: "AtamiBold";
font-size: 23;
text-align: center;

}

a {
  text-decoration: none;
  color: var(--guidance-color);
  :hover {
    color: var(--primary-color);
  }
}
 
`;

export const ButtonStyle = css`
  font-size: 18px;
  position: relative;
  width: 200px;
  height: 100px;
  border: none;
  border-radius: 12px;
  background-color: var(--decision-1-color);
  color: #607a94;
  font-family: "AtamiRegular";
  :active {
    opacity: 0.6;
  }
`;

export const ButtonOutline = css`
  position: absolute;
  right: 6px;
  left: -6px;
  top: 6px;
  width: 200px;
  height: 100px;
  border: 2.5px solid #607a94;
  border-radius: 12px;
  opacity: 3;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.6s;
  :hover {
    position: absolute;
    right: -6px;
    left: 6px;
    top: -6px;
  }
`;

export default GlobalStyle;
