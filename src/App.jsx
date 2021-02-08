import React, { useState,Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
// global style
import GlobalStyle from "common/GlobalStyle";
import Header from "components/Header";
// pages

import Routes from "Routes";

const App = () => {
  const [login, setLogin ] = useState(false);

  const setLoginStatus = (val) =>{
    
    setLogin(val);
    console.log(login);
  }

  return(
  <>
    <Suspense fallback={<>{/* Loading 컴포넌트 추후 추가 */}</>}>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header loginStatus={login} setLoginStatus />
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    </Suspense>
  </>
)};

export default App;
