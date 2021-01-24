import React, { Fragment } from "react";

import * as S from "./style";

const ButtonArea = () => (
  <Fragment>
    <S.Layout>
      <S.UploadButton>등록</S.UploadButton>
      <S.CancelButton>취소</S.CancelButton>
    </S.Layout>
  </Fragment>
);

export default ButtonArea;
