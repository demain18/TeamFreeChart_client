import React, { lazy } from "react";
import { Route } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));
const GalleryExplore = lazy(() => import("pages/GalleryExplore"));
const GalleryDetail = lazy(() => import("pages/GalleryDetail"));
const ProfileDetail = lazy(() => import("pages/ProfileDetail"));
const Survey = lazy(() => import("pages/Survey"));
function Router() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/GalleryExplore" component={GalleryExplore} />
      <Route exact path="/GalleryDetail" component={GalleryDetail} />
      <Route exact path="/ProfileDetail" component={ProfileDetail} />
      <Route exact path="/Survey" component={Survey} />
    </>
  );
}

export default Router;
