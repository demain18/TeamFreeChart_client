import React from "react";
import { Route } from "react-router-dom";

// global style
import GlobalStyle from "common/GlobalStyle";

// pages
import Home from "pages/Home";

const App = () => (
  <>
    <div>
      <GlobalStyle />
      <Route path="/" component={Home} />
    </div>
  </>
);

export default App;
