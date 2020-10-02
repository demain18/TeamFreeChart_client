import React, { Fragment } from "react";

import * as S from "./style";

const FuncButtons = () => (
  <Fragment>
    <S.Layout>
      <S.Button>수정</S.Button>
      <div>|</div>
      <S.Button>삭제</S.Button>
      <div>|</div>
      <S.Button>게시물 신고</S.Button>
    </S.Layout>
  </Fragment>
);

// Home.propTypes = {};
export default FuncButtons;
