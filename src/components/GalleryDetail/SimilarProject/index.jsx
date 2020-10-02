import React, { Fragment } from "react";

import * as S from "./style";

const SimilarProject = () => (
  <Fragment>
    <S.Layout>
      <S.Title>비슷한 프로젝트</S.Title>
      <S.ProjectArea>
        <S.Project />
        <S.Project />
        <S.Project />
      </S.ProjectArea>
    </S.Layout>
  </Fragment>
);

// Home.propTypes = {};
export default SimilarProject;
