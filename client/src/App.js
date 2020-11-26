import React from "react";
import GlobalStyle from "./GlobalStyle";
import logo from "./stories/assets/logo.svg";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <img src={logo} className="app_logo" alt="choicely" />
      <a href="/storybook">To Storybook</a>
    </div>
  );
}

export default App;
