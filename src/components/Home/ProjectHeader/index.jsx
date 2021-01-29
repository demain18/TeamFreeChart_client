/* eslint-disable jsx-a11y/accessible-emoji */
// 이모지 부분 warning 비활성화
import React from "react";
import * as S from "./style";

function index() {
  return (
    <>
      <S.Wrapper>
        <S.Layout>
          <S.Header>
            <S.Title>프로젝트 갤러리</S.Title>
            <S.MoreButton to="/GalleryExplore">더보기</S.MoreButton>
          </S.Header>
        </S.Layout>
      </S.Wrapper>
    </>
  );
}

export default index;
