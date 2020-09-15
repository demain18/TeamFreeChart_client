import React from "react";

// style
import * as S from "./style";

const Button = () => (
  <>
    <S.Layout>
      <S.SmallButton_G>프로필 보기</S.SmallButton_G>
      <S.Button_G>프로필 보기</S.Button_G>
      <S.SmallButton_B>프로필 보기</S.SmallButton_B>
      <S.Button_B>프로필 보기</S.Button_B>
      <S.BigButton_W>조사 참여하기</S.BigButton_W>
      <S.SnsButton>
        <S.FaceBookIcon />
        페이스북으로 시작
      </S.SnsButton>
    </S.Layout>
  </>
);

export default Button;
