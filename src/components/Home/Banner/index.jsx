/* eslint-disable jsx-a11y/accessible-emoji */
// 이모지 부분 warning 비활성화
import React from "react";
import * as S from "./style";

function index() {
  return (
    <>
      <S.Wrapper>
        <S.Layout>
          <S.Title>새로운 이벤트를 확인하세요! 🎁</S.Title>
          <S.Disc>선택하신 조건에 맞는 프로젝트가 올라왔습니다.</S.Disc>
        </S.Layout>
      </S.Wrapper>
    </>
  );
}

export default index;
