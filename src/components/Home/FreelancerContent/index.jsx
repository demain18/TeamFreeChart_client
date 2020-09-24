import React, { Fragment } from "react";
import * as S from "../FreelancerContent/style";
function index() {
  const Dummy = [
    { title: "프리렌서 컨텐츠1", value: "도쿄 프리렌서" },
    { title: "프리렌서 컨텐츠2", value: "서울 프리렌서" },
    { title: "프리렌서 컨텐츠3", value: "상하이 프리렌서" },
    { title: "프리렌서 컨텐츠4", value: "뉴욕 프리렌서" },
  ];
  const MapProjectBox = Dummy.map((i) => {
    return (
      <Fragment>
        <S.ProjectBox>
          <S.ProjectImage />
          <S.ProjectTitle>{i.title}</S.ProjectTitle>
          <S.ProjectValue>{i.value}</S.ProjectValue>
        </S.ProjectBox>
      </Fragment>
    );
  });
  return (
    <Fragment>
      <S.Layout>
        <S.Header>
          <S.Title>프리렌서 컨텐츠</S.Title>
          <S.MoreButton>더보기</S.MoreButton>
        </S.Header>
        <S.ProjectsArea>{MapProjectBox}</S.ProjectsArea>
      </S.Layout>
    </Fragment>
  );
}

export default index;
