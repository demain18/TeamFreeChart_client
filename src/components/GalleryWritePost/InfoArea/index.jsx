import React, { Fragment } from "react";

import * as S from "./style";

const InfoArea = () => (
  <Fragment>
      <S.Layout>
        <S.SelectDiv>
          <p>대분류</p>
          <S.Select>
            선택
            <S.DownTriIcon />
          </S.Select>
        </S.SelectDiv>
        <S.SelectDiv>
          <p>소분류</p>
          <S.Select>
            선택
            <S.DownTriIcon />
          </S.Select>
        </S.SelectDiv>
        <S.CheckboxDiv>
          <S.InputCheckbox/>
          <label>R-18 컨텐츠입니다.</label>
        </S.CheckboxDiv>
      </S.Layout>

      <S.Layout>
        <S.SelectDiv>
          <p>인원</p>
          <S.Select>
            선택
            <S.DownTriIcon />
          </S.Select>
        </S.SelectDiv>
        <S.SelectDiv>
          <p>소요기간</p>
          <S.InputPeriod />
        </S.SelectDiv>
      </S.Layout>
      <S.CommentInput placeholder="내용을 입력하세요" />
  </Fragment>
);

export default InfoArea;
