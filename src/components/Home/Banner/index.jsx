import React, { Fragment } from "react";
import * as S from "../Banner/style";
function index() {
  return (
    <Fragment>
      <S.Wrapper>
        <S.Layout>
          <S.Title>새로운 이벤트를 확인하세요! 🎁</S.Title>
          <S.Disc>선택하신 조건에 맞는 프로젝트가 올라왔습니다.</S.Disc>
        </S.Layout>
      </S.Wrapper>
    </Fragment>
  );
}

export default index;
