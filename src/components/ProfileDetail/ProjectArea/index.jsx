import React from "react";
import * as S from "./style";

const ProjectArea = (props) => {

  return (
    <S.ProjectArea>
      <S.ProjectAreaTitle>3개의 프로젝트</S.ProjectAreaTitle>
      <S.ProjectContensArea>
        <S.ContentDiv>
          {/**
           * component projectAreaItem
           */}
          <S.ProjectImage/>
          <div>
            <S.ProjectAreaTitle>포폴러 웹 서비스</S.ProjectAreaTitle>
            <S.IconEye/> 1.2K
            <S.IconHeart /> 350
          </div>
        </S.ContentDiv>
        <S.ContentDiv>
          <S.ProjectImage/>
          <div>
            <S.ProjectAreaTitle>포폴러 웹 서비스</S.ProjectAreaTitle>
            <S.IconEye/> 1.2K
            <S.IconHeart /> 350
          </div>
        </S.ContentDiv>
        <S.ContentDiv>
          <S.ProjectImage/>
          <div>
            <S.ProjectAreaTitle>포폴러 웹 서비스</S.ProjectAreaTitle>
            <S.IconEye/> 1.2K
            <S.IconHeart /> 350
          </div>
        </S.ContentDiv>
        <S.ContentDiv>
          <S.ProjectImage/>
          <div>
            <S.ProjectAreaTitle>포폴러 웹 서비스</S.ProjectAreaTitle>
            <S.IconEye/> 1.2K
            <S.IconHeart /> 350
          </div>
        </S.ContentDiv>
      </S.ProjectContensArea>
    </S.ProjectArea>
  );
}

export default ProjectArea;
