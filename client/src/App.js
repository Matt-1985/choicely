import React from "react";
import GlobalStyle from "./GlobalStyle";
import SplashPage from "./pages/SplashPage";
import { PageContainer } from "./components/PageContainer";

function App() {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <SplashPage />
      </PageContainer>
    </>
  );
}

export default App;
