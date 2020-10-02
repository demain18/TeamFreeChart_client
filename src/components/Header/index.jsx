/* eslint-disable jsx-a11y/accessible-emoji */
// 이모지 부분 warning 비활성화
import React from "react";
import * as S from "./style";

function index() {
  return (
    <>
      <S.Wrapper>
        <S.Layout>
          <S.Logo to="/">프리차트</S.Logo>
          <S.LinkArea>
            <S.LinkButton>급여차트</S.LinkButton>
            <S.LinkButton to="/GalleryExplore">갤러리</S.LinkButton>
            <S.LinkButton>컨텐츠</S.LinkButton>
            <S.LinkButton>프로필</S.LinkButton>
          </S.LinkArea>
          <S.ComponentArea>
            <S.Alarm />
            <S.ProfileImage />
          </S.ComponentArea>
        </S.Layout>
      </S.Wrapper>
    </>
  );
}

export default index;
