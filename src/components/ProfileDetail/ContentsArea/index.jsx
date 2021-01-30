import React from "react";
import * as S from "./style";

const ContentsArea = (props) => {
 
  return (
    <S.ContentsArea>
        {/**
         * component ProfileInfoArea 
         */}
        <S.ProfileInfoArea>
        <div>
            <S.IntroductionTitle>소개</S.IntroductionTitle>
            <S.IntroductionContentsDiv>
            안녕하세요, Demain입니다. 저는 2018년부터 3년간 웹 프로그래밍을 공부했고 현재는 프리랜서로 활동중입니다. 주로 프론트엔드와 백엔드 개발, 데이터베이스 설계 및 분석을 하고 있으며 경민대학교에서 학사과정중에 있습니다.
            <br/>또한 코딩 공부 플랫폼인 코딩팩과 개인 포트폴리오겸 블로그인 Sparklejun을 운영중에 있으며 또다른 프로젝트인 프리차트를 개발중에 있습니다. 제 프로젝트에 관심이 있다면 사이트 하단 갤러리를 참고해주세요!
            보통 10시 ~ 22시에 연락 가능하며 비즈니스 관련 연락은 카카오톡으로 주시면 됩니다.
            </S.IntroductionContentsDiv>
        </div>
        <div>
            <S.IntroductionTitle>연락처/SNS</S.IntroductionTitle>
            <S.IntroductionContentsDiv>
            <ul>
                <li to="/">openchat.com</li>
                <li to="/">sparkejun.co</li>
                <li to="/">github.com/demain</li>
            </ul>
            </S.IntroductionContentsDiv>
        </div>
        <div>
            <S.IntroductionTitle>정보</S.IntroductionTitle>
            <S.IntroductionContentsDiv>
            <ul>
                <li>재직중</li>
                <li>직장비공개</li>
                <li>3년차</li>
            </ul>
            </S.IntroductionContentsDiv> 
        </div>
        </S.ProfileInfoArea>
        <S.ProfileInfoArea>
        <S.IntroductionTitle>활동 지역</S.IntroductionTitle>
        <S.MapAreaDiv/>
        </S.ProfileInfoArea>
    </S.ContentsArea>
  );
};

export default ContentsArea;