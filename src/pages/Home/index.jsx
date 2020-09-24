import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// style
import * as S from "./style";
import MainWageArea from "components/Home/MainWageArea";
const Home = () => (
  <Fragment>
    <S.Layout>
      <MainWageArea />
    </S.Layout>
  </Fragment>
);

// Home.propTypes = {};
export default Home;
