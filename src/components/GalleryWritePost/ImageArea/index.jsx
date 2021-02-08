import React, { Fragment } from "react";

import * as S from "./style";

const ButtonArea = () => (
  <>
    <S.Layout>
      <S.ImageFileInput />
      <S.InfoButton>이미지 업로드</S.InfoButton>
      <S.QuestionButton />
    </S.Layout>
    <S.Layout>
      <S.ImageGrid>
        <S.UploadImageDiv />
        <S.ImageCloseButton />
      </S.ImageGrid>
      <S.ImageGrid>
        <S.UploadImageDiv />
        <S.ImageCloseButton />
      </S.ImageGrid>
      <S.ImageGrid>
        <S.UploadImageDiv />
        <S.ImageCloseButton />
      </S.ImageGrid>
    </S.Layout>
  </>
);

export default ButtonArea;
