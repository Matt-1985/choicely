import { createGlobalStyle } from "styled-components/macro";
import AtamiRegular from "./stories/assets/fonts/AtamiRegular.otf";
import AtamiBold from "../src/stories/assets/fonts/AtamiBold.otf";

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

html {
  height: 100%;
}
 
 :root {
   --primary-color: #fbfbfb;
   --guidance-color: #0a335c;
   --decision-primary-color: #ff4477;
   --decision-1-color: #ffd17e;
   --decision-filter-color: #20f6ce;
   --input-placeholder-color: #607A94;
}

body{

margin: 0;
font-size: 18;
font-family: "AtamiRegular";
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
color: var(--guidance-color);
background-color: var(--primary-color)

}

h1 {
font-family: "AtamiBold";
font-size: 23;

}
 
`;

export default GlobalStyle;
