import React, { lazy } from "react";
import { Route } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));
const GalleryExplore = lazy(() => import("pages/GalleryExplore"));

function Router() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/GalleryExplore" component={GalleryExplore} />
    </>
  );
}

export default Router;
