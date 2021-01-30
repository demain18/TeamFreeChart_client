import Body from "components/GalleryDetail/Body";
import Comment from "components/GalleryDetail/Comment";
import FuncButtons from "components/GalleryDetail/FuncButtons";
import Header from "components/GalleryDetail/Header";
import Profile from "components/GalleryDetail/Profile";
import SimilarProject from "components/GalleryDetail/SimilarProject";
import ProjectHeader from "components/Home/ProjectHeader";
import ProjectGrid from "components/GalleryExplore/ProjectGrid";
import React, { Fragment } from "react";

import * as S from "./style";

const GalleryDetail = () => (
  <Fragment>
    <S.Wrapper>
      <S.Layout>
        <S.LeftArea>
          <Header />
          <Body />
          <FuncButtons />
          <Comment />
          {/* <SimilarProject /> */}

          {/* <ProjectHeader /> */}
          <ProjectGrid />
        </S.LeftArea>
        <S.RightArea>
          <Profile />
        </S.RightArea>
      </S.Layout>
    </S.Wrapper>
  </Fragment>
);

// Home.propTypes = {};
export default GalleryDetail;
