import React, { Fragment } from "react";

import * as S from "./style";

const ButtonArea = () => (
  <Fragment>
    <S.Layout>
      <S.ImageFileInput /> 
      <S.InfoButton>이미지 업로드</S.InfoButton>
      <S.QuestionButton />
    </S.Layout>
    <S.Layout>
      <div>
        <S.UploadImageDiv />
        <S.ImageCloseButton />
      </div>
      <div>
        <S.UploadImageDiv />
        <S.ImageCloseButton />
      </div>
      <div>
        <S.UploadImageDiv />
        <S.ImageCloseButton />
      </div>
    </S.Layout>
  </Fragment>
);

export default ButtonArea;
