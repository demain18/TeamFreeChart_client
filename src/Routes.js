import React, { lazy } from "react";
import { Route } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));
const GalleryExplore = lazy(() => import("pages/GalleryExplore"));
const GalleryDetail = lazy(() => import("pages/GalleryDetail"));
const ProfileDetail = lazy(() => import("pages/ProfileDetail"));
const Survey = lazy(() => import("pages/Survey"));
const GalleryWritePost = lazy(() => import("pages/GalleryWritePost"));
function Router() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route  exact path="/gallery" component={GalleryExplore} />
      <Route  exact path="/gallery/project" component={GalleryDetail} />
      <Route  exact path="/profile" component={ProfileDetail} />
      <Route  exact path="/survey" component={Survey} />
      <Route  exact path="/gallery/project/write" component={GalleryWritePost}/>
      {/* <Route render={({location})=> (  //path 따로 정의하지 않으면 모든 상황에 렌더링
        <div>
          <h2>이 페이지는 존재하지 않습니다 : </h2>
          <p>{location.pathname}</p>
        </div>
      )} /> */}
    </>
  );
}

export default Router;
