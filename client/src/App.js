import React, { useState, useEffect } from "react";
import GlobalStyle from "./GlobalStyle";
import SplashPage from "./pages/SplashPage";
import StartPage from "./pages/StartPage";
import ChoosingPage from "./pages/ChoosingPage";
import RoulettePage from "./pages/RoulettePage";
import FilterPage from "./pages/FilterPage";
import { PageContainer } from "./components/PageContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [page, setPage] = useState(true);

  useEffect(() => {
    setTimeout(() => setPage(false), 3500);
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <PageContainer>
        <Switch>
          <Route exact path="/">
            {page ? <SplashPage /> : <StartPage />}
          </Route>
          <Route path="/desicion">
            <ChoosingPage />
          </Route>
          <Route path="/random">
            <RoulettePage />
          </Route>
          <Route path="/select">
            <FilterPage />
          </Route>
        </Switch>
      </PageContainer>
    </Router>
  );
}

export default App;
