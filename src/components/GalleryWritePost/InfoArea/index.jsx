/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Fragment } from "react";
import { Tooltip, Button } from 'antd';

import * as S from "./style";

const InfoArea = () => (
  <>
    <S.Layout>
      <S.SelectDiv>
        <p>대분류</p>
        {/* <S.Select>
          선택
          <S.DownTriIcon />
        </S.Select> */}
        <S.Select name="category">
          <option value="">선택</option>
          <option value="AA">AA</option>
          <option value="BB">BB</option>
          <option value="CC">CC</option>
        </S.Select>
      </S.SelectDiv>
      <S.SelectDiv>
        <p>소분류</p>
        <S.Select name="categoryDetail">
          <option value="">선택</option>
          <option value="aa">aa</option>
          <option value="bb">bb</option>
          <option value="cc">cc</option>
        </S.Select>
      </S.SelectDiv>
      <S.InputCheckbox name="r18" id="r18" style={{ marginTop: "35px" }} />
      <label htmlFor="r18" onBlur={(e) => { console.log(e); }} />
      <Tooltip placement="rightTop" title="R-18 컨텐츠입니다.">
        <span style={{ marginTop: "35px", marginLeft: "5px" }}>R-18 컨텐츠입니다.</span>
      </Tooltip>
    </S.Layout>

    <S.Layout>
      <S.SelectDiv>
        <p>인원</p>
        <S.Select name="memberCount">
          <option value="">선택</option>
          <option value="0">1인</option>
          <option value="1">1인이상</option>
          <option value="3">3인이상</option>
          <option value="5">5인이상</option>
          <option value="10">10인이상</option>
        </S.Select>
      </S.SelectDiv>
      <S.SelectDiv>
        <p>소요기간</p>
        <S.InputPeriod name="period" />
      </S.SelectDiv>
    </S.Layout>
    <S.CommentInput name="desc" placeholder="내용을 입력하세요" />
  </>
);

export default InfoArea;
