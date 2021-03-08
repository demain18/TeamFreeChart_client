import React, { Fragment } from "react";
import { ButtonG, ButtonB } from "common/Button";
import * as S from "./style";

const ButtonArea = ({ submit }) => (
  <>
    <S.Layout>
      <ButtonB>등록</ButtonB>
      <ButtonG>취소</ButtonG>
    </S.Layout>
  </>
);

export default ButtonArea;
