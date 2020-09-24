import React, { Fragment } from "react";
import * as S from "../MainWageArea/style";
import GraphArea from "components/Home/MainWageArea/GraphArea";
import InfoArea from "components/Home/MainWageArea/InfoArea";
function index() {
  return (
    <Fragment>
      <S.Wrapper>
        <S.Layout>
          <GraphArea />
          <InfoArea />
        </S.Layout>
      </S.Wrapper>
    </Fragment>
  );
}

export default index;
