import React, { lazy } from "react";
import { Route } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));
const GalleryExplore = lazy(() => import("pages/GalleryExplore"));
const GalleryDetail = lazy(() => import("pages/GalleryDetail"));
const GalleryWritePost = lazy(() => import("pages/GalleryWritePost"));
function Router() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/GalleryExplore" component={GalleryExplore} />
      <Route exact path="/GalleryDetail" component={GalleryDetail} />
      <Route exact path="/GalleryWritePost" component={GalleryWritePost}/>
    </>
  );
}

export default Router;
