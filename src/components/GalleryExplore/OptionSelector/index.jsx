import React, { Fragment } from "react";

import * as S from "./style";

const OptionSelector = () => (
  <Fragment>
    <S.Layout>
      <S.CategorySelect>
        웹 프론트엔드
        <S.OptionsIcon />
      </S.CategorySelect>
      <S.ButtonRightArea>
        <S.ProjectUploadButton to="/GalleryWritePost">프로젝트 등록</S.ProjectUploadButton>
        <S.Select>
          선택
          <S.DownTriIcon />
        </S.Select>
      </S.ButtonRightArea>
    </S.Layout>
  </Fragment>
);

// Home.propTypes = {};
export default OptionSelector;
