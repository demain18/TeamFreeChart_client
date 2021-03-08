import React, { Fragment } from "react";
import { Button } from 'antd';

// style
import * as S from "./style";

const SmallButtonG = ({ children, width, color }) => (
  <>
    <S.SmallButtonG style={{ width }}>{children}</S.SmallButtonG>
  </>
);

const SmallButtonB = ({ children, width }) => (
  <>
    <S.SmallButtonB style={{ width }}>{children}</S.SmallButtonB>
  </>
);
const ButtonG = ({ children, width }) => (
  <>
    <S.ButtonG style={{ width, marginLeft: "10px" }}>{children}</S.ButtonG>
  </>
);
const ButtonB = ({ children, width }) => (
  <>
    <S.ButtonB style={{ width }}>{children}</S.ButtonB>
  </>
);
const BigButtonW = ({ children, width }) => (
  <>
    <S.BigButtonW style={{ width }}>{children}</S.BigButtonW>
  </>
);
const SnsButton = ({ children, width }) => (
  <>
    <S.SnsButton style={{ width }}>{children}</S.SnsButton>
  </>
);

/* SmallButton_B, Button_G, Button_B, BigButton_W, SnsButton; */

export {
  SmallButtonG, SmallButtonB, ButtonG, ButtonB, BigButtonW, SnsButton
};
