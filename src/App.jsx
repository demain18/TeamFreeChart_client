import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
// global style
import GlobalStyle from "common/GlobalStyle";
import Header from "components/Header";
// pages

import Router from "Router";

const App = () => (
  <>
    <Suspense fallback={<>{/*Loading 컴포넌트 추후 추가*/}</>}>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Router />
      </BrowserRouter>
    </Suspense>
  </>
);

export default App;
