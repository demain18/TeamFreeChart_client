import React, { Fragment } from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";
// style
import * as S from "./style";
import MainWageArea from "components/Home/MainWageArea";
import ProjectGallery from "components/Home/ProjectGallery";
import FreelancerContent from "components/Home/FreelancerContent";
import Banner from "components/Home/Banner";

const Home = () => (
  <Fragment>
    <S.Layout>
      <MainWageArea />
      <ProjectGallery />
      <FreelancerContent />
      <Banner />
    </S.Layout>
  </Fragment>
);

// Home.propTypes = {};
export default Home;
