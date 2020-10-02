import React, { Fragment } from "react";

import * as S from "./style";

const Body = () => (
  <Fragment>
    <S.Layout>
      <S.ProjectImage />
      <S.ButtonArea>
        <S.MoreButton>
          전체보기
          <S.DownTriIcon />
        </S.MoreButton>
      </S.ButtonArea>
      <S.Article>
        포폴러 서비스는 프리랜서들이 미팅 상황에서 자신의 이력서나 프로젝트들을
        제공하기 어렵다는 점에서 착안한 서비스입니다. 웹 기반의 서비스이며
        pdf기반의 포트폴리오 갤러리 기능을 제공합니다. 다양한 기능이 있으며 그
        목록으로는 아래와 같습니다.
        <br />
        <br />- 로그인/회원가입
        <br /> - 프로필
        <br /> - 프로젝트
        <br /> - 갤러리
        <br /> - 메신저
      </S.Article>
    </S.Layout>
  </Fragment>
);

// Home.propTypes = {};
export default Body;
