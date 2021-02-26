import React, { Fragment } from "react";

import * as S from "./style";

const ButtonArea = ({ submit }) => (
  <>
    <S.Layout>
      <S.UploadButton type="submit" >등록</S.UploadButton>
      <S.CancelButton>취소</S.CancelButton>
    </S.Layout>
  </>
);

export default ButtonArea;
