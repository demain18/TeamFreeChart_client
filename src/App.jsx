import React, { Fragment } from "react";
import styled from "styled-components";
import * as S from "./common/style";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Box>
          <S.SmallButton_G>프로필 보기</S.SmallButton_G>
          <S.Button_G>프로필 보기</S.Button_G>
          <S.SmallButton_B>프로필 보기</S.SmallButton_B>
          <S.Button_B>프로필 보기</S.Button_B>
          <S.BigButton_W>조사 참여하기</S.BigButton_W>
          <S.SnsButton>
            <S.FaceBookIcon />
            페이스북으로 시작
          </S.SnsButton>
        </Box>
      </div>
    </Fragment>
  );
}

export default App;
const Box = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
