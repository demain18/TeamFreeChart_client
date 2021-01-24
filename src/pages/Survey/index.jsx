import React, { Fragment } from "react";

import * as S from "./style";

const Survey = () => (
  <Fragment>
    <S.Wrapper>

    {/* 제목영역 */}
    <S.SurveyDetail style={{borderTop:"25px solid #589FFF"}}>
      <p style={{fontSize:"30px",marginBottom:"15px"}}>외주 견적 설문조사</p>
      <div>
        <p style={{display:"flex"}}>이 설문지는 IT프리랜서의 업계평균 견적을 알아보기 위해 시행하는 설문입니다.
        백산님은 현재까지 &nbsp;<p style={{fontWeight:"bold"}}> 0개직군</p>에 대한 조사에 참여했습니다. </p><p>계정 당 최대 3개 직군까지 조사에 참여할 수 있습니다.</p>
      </div>
    </S.SurveyDetail>

    {/* 직종선택 */}
    <S.SurveyDetail>
      <S.SurveyDetailTitle>활동중인 직종이 어떻게 되나요?</S.SurveyDetailTitle>
      <S.SelctBoxesDiv>
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
      </S.SelctBoxesDiv>
    </S.SurveyDetail>

    {/* 경력선택 */}
    <S.SurveyDetail>
      <S.SurveyDetailTitle>경력이 얼마나 되나요?</S.SurveyDetailTitle>
      <S.SelectDiv>
      <S.Select>
        선택
        <S.DownTriIcon />
      </S.Select>
      </S.SelectDiv>
    </S.SurveyDetail>

    {/* 급여영역 */}
    <S.SurveyDetail>
      <S.SurveyDetailTitle>지불받고자 하는 희망 급여는 어느정도인가요?</S.SurveyDetailTitle>
      <div style={{display:"flex"}}>
        <S.PayInput placeholder="원" /><S.MonthP>/1개월</S.MonthP>
      </div>
    </S.SurveyDetail>

    {/* 견적영역 */}
    <S.SurveyDetail>
      <S.SurveyDetailTitle>견적 1 높이 1500px의 시안을 5페이지 퍼블리싱 하는 작업에 대한 견적</S.SurveyDetailTitle>
      <div>
        <S.PayInput  placeholder="일"/>
      </div>
      <div style={{marginTop:"10px"}}>
        <S.PayInput  placeholder="원" />
      </div>
    </S.SurveyDetail>

    <S.SurveyUploadButton>제출</S.SurveyUploadButton>

    </S.Wrapper>
  </Fragment>
);

export default Survey;
