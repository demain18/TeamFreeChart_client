import React, { Fragment } from "react";
import * as S from "../ProjectGallery/style";
function index() {
  const Dummy = [
    { title: "포폴러 웹 서비스1", value: "벨류들" },
    { title: "포폴러 웹 서비스2", value: "벨류들" },
    { title: "포폴러 웹 서비스3", value: "벨류들" },
    { title: "포폴러 웹 서비스4", value: "벨류들" },
  ];
  const MapProjectBox = Dummy.map((i) => {
    return (
      <Fragment>
        <S.ProjectBox to="/GalleryDetail">
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
          <S.Title>프로젝트 갤러리</S.Title>
          <S.MoreButton to="GalleryExplore">더보기</S.MoreButton>
        </S.Header>
        <S.ProjectsArea>{MapProjectBox}</S.ProjectsArea>
      </S.Layout>
    </Fragment>
  );
}

export default index;
