import React from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";
// style
import MainWageArea from "components/Home/MainWageArea";
import ProjectGallery from "components/Home/ProjectGallery";
import FreelancerContent from "components/Home/FreelancerContent";
import ProjectHeader from "components/Home/ProjectHeader";
import ProjectGrid from "components/GalleryExplore/ProjectGrid";
import Banner from "components/Home/Banner";
import * as S from "./style";

const Home = () => (
  <>
    <S.Layout>
      <MainWageArea /> {/* components/Home/MainWageArea */}

      {/* <ProjectGallery /> */}
      {/* <FreelancerContent /> */}

      <S.ProjectWrap>
        <ProjectHeader />
        <ProjectGrid />
      </S.ProjectWrap>

      <Banner />
    </S.Layout>
  </>
);

// Home.propTypes = {};
export default Home;
