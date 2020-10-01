import React, { Fragment } from "react";

import * as S from "./style";

const Dummy = [
  { id: 1, Title: "프로젝트1", Disc: "추가정보1" },
  { id: 1, Title: "프로젝트2", Disc: "추가정보2" },
  { id: 1, Title: "프로젝트3", Disc: "추가정보3" },
  { id: 1, Title: "프로젝트4", Disc: "추가정보4" },
  { id: 1, Title: "프로젝트5", Disc: "추가정보5" },
  { id: 1, Title: "프로젝트6", Disc: "추가정보6" },
  { id: 1, Title: "프로젝트7", Disc: "추가정보7" },
  { id: 1, Title: "프로젝트8", Disc: "추가정보8" },
];
const RenderingProjectBox = Dummy.map((v) => {
  return (
    <>
      <S.ProjectBox>
        <S.ProjectImage />
        <S.ProjectTitle>{v.Title}</S.ProjectTitle>
        <S.ProjectInfo>{v.Disc}</S.ProjectInfo>
      </S.ProjectBox>
    </>
  );
});
const ProjectGrid = () => (
  <Fragment>
    <S.Layout>
      <S.GridContainer>{RenderingProjectBox}</S.GridContainer>
    </S.Layout>
  </Fragment>
);

// Home.propTypes = {};
export default ProjectGrid;
