import React, { Fragment } from "react";

import * as S from "./style";

const Survey = () => (
  <Fragment>
    <S.Wrapper>

    {/* 제목영역 */}
    <S.SurveyDetail style={{borderTop:"15px solid #589FFF"} }>
      <p style={{fontSize:"30px",marginBottom:"15px"}}>외주 견적 설문조사</p>
      <div>
         <p style={{fontSize: "15px", lineHeight: "20px"}}>
          현재 설문조사는 전문가님의 정보제공으로 이루어지며 업계의 프리랜서 단가의 표준을 형성하는것을 목표로 하고 있습니다. 
          현재까지 [전문가]님은 <strong>0개직군</strong>에 대한 조사에 참여했습니다.
          한 계정당 최대 3개 직군까지 조사에 참여할 수 있습니다.
         </p>
      </div>
    </S.SurveyDetail>

    {/* 직종선택 */}
    <S.SurveyDetail>
      <S.SurveyDetailTitle>활동중인 직종이 어떻게 되나요?</S.SurveyDetailTitle>
      <S.SelctBoxesDiv>
        <S.SelectDiv>
          <S.SelectDivTitle>대분류</S.SelectDivTitle>
          <S.Select>
            선택
            <S.DownTriIcon />
          </S.Select>
        </S.SelectDiv>
        <S.SelectDiv>
          <S.SelectDivTitle>소분류</S.SelectDivTitle>
          <S.Select>
            선택
            <S.DownTriIcon />
          </S.Select>
        </S.SelectDiv>
      </S.SelctBoxesDiv>
    </S.SurveyDetail>

    {/* 경력선택 */}
    <S.SurveyDetail>
      <S.SurveyDetailTitle>개인인가요 팀(또는 기업)인가요?</S.SurveyDetailTitle>
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
      <S.SurveyDetailTitle>견적1) 1500x2000 규모의 전신 규모의 상업용 캐릭터 일러스트</S.SurveyDetailTitle>
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
