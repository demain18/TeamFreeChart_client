import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// global style
import GlobalStyle from "common/GlobalStyle";

// pages
import Home from "pages/Home";

const App = () => (
  <>
    <div>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  </>
);

export default App;
