import React, { Fragment } from "react";
import ShowComment from "./ShowComment";

import * as S from "./style";

const Comment = () => (
  <Fragment>
    <S.Layout>
      <S.Header>댓글 1건</S.Header>
      <S.CommentInput placeholder="댓글을 입력하세요" />
      <ShowComment />
    </S.Layout>
  </Fragment>
);

// Home.propTypes = {};
export default Comment;
