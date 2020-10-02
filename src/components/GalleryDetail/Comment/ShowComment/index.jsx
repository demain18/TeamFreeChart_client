import React, { Fragment } from "react";

import * as S from "./style";

const ShowComment = () => (
  <Fragment>
    <S.Layout>
      <S.UserImage />
      <S.Wrapper>
        <S.UserName>백산2</S.UserName>
        <S.TimeStamp>2시간 전</S.TimeStamp>
        <S.Article>댓글 작성 테스트</S.Article>
      </S.Wrapper>
    </S.Layout>
  </Fragment>
);

// Home.propTypes = {};
export default ShowComment;
