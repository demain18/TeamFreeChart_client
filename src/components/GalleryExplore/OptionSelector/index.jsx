import React, { Fragment } from "react";

import * as S from "./style";

const OptionSelector = () => (
  <>
    <S.Layout>
      <S.CategorySelect>
        웹 프론트엔드
        <S.OptionsIcon />
      </S.CategorySelect>
      <S.ButtonRightArea>
        <S.ProjectUploadButton to="/gallery/project/write">프로젝트 등록</S.ProjectUploadButton>
        <S.Select>
          선택
          <S.DownTriIcon />
        </S.Select>
      </S.ButtonRightArea>
    </S.Layout>
  </>
);

// Home.propTypes = {};
export default OptionSelector;
