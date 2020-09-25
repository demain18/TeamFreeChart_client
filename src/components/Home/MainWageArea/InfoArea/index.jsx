import React, { Fragment } from "react";
import * as S from "components/Home/MainWageArea/InfoArea/style";

function index() {
  return (
    <Fragment>
      <S.Layout>
        <S.SelectWrapper>
          <S.Select>
            프로그래밍
            <S.DownIcon />
          </S.Select>
          <S.Select>
            프론트엔드
            <S.DownIcon />
          </S.Select>
        </S.SelectWrapper>
        <S.InfoArea>
          <S.InfoTitle>웹 프론트엔드 개발 평균급여</S.InfoTitle>
          <S.InfoWageArea>
            <S.InfoWageValue>350만원</S.InfoWageValue>
            <S.InfoWageValue className="month">/1개월</S.InfoWageValue>
          </S.InfoWageArea>
          <S.InfoButton>조사 참여하기</S.InfoButton>
        </S.InfoArea>
        <S.InfoMore>
          해당 자료는 현업에 종사하시는 분들의 정보 제공으로 구성{"\n"}되어
          있으며 매주 금요일 <b style={{ fontWeight: "400" }}>오후 6시</b>마다
          {/*폰트 굵기 조정*/}
          갱신됩니다.
        </S.InfoMore>
      </S.Layout>
    </Fragment>
  );
}

export default index;
