import React, { useState, useEffect } from "react";
import GlobalStyle from "./GlobalStyle";
import SplashPage from "./pages/SplashPage";
import StartPage from "./pages/StartPage";
import DesicionPage from "./pages/DesicionPage";
import SelectBoxScreen from "./pages/SelectBoxScreen";
import DesicionScreenLazy from "./pages/DesicionScreenLazy";
import DetailCardScreenLazy from "./pages/DetailCardScreenLazy";
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
            <DesicionPage />
          </Route>
          <Route path="/select">
            <SelectBoxScreen />
          </Route>
          <Route path="/choice">
            <DesicionScreenLazy />
          </Route>
          <Route path="/detaildesicion">
            <DetailCardScreenLazy />
          </Route>
        </Switch>
      </PageContainer>
    </Router>
  );
}

export default App;
