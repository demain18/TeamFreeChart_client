/* eslint-disable jsx-a11y/accessible-emoji */
// 이모지 부분 warning 비활성화
import React, { useState, useEffect } from "react";
// import Modal from "common/Modal"
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from 'modules/SignInModule';
import { signUpRequest } from 'modules/SignUpModule';
import Modal from "common/Modal";
import LoginModal from "./LoginModal";
import * as S from "./style";

const Index = () => {
  /**
   * isVisible state는 하나로 묶어서 관리
   * 나눠져야하는 state있으면 reducer에서 완결
   */
  const [loginVisible, setLoginVisible] = useState(false);
  const [joinVisible, setJoinVisible] = useState(false);
  const [prflMenuVisible, setPrflMenuVisible] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    loginId: '',
    pswd: ''
  });
  const [joinInfo, setJoinInfo] = useState({
    email: '',
    id: '',
    nickname: '',
    pw: '',
    pwc: ''
  });
  const [cookies, setCookie, removeCookie] = useCookies(['tokenCookie']);

  const loginModal = () => {
    console.log("####");
    setLoginVisible(!loginVisible);
  };
  const joinModal = () => {
    setJoinVisible(!joinVisible);
  };

  const onChangeInput = (e) => {
    const { value, name } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value
    });
  };
  const onChangeJoinInput = (e) => {
    const { value, name } = e.target;
    setJoinInfo({
      ...joinInfo,
      [name]: value
    });
  };

  const prflMenuOpen = () => {
    console.log(prflMenuVisible);
    setPrflMenuVisible(!prflMenuVisible);
  };

  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.login.loginStatus.isLoggedIn);
  const signUpStatus = useSelector((state) => state.signUp.signUpStatus);

  useEffect(() => {
    console.log('open 1');
    if (loginStatus) {
      console.log('open 2');
      setLoginVisible(false);
    }
  }, [loginStatus]);

  useEffect(() => {
    console.log(signUpStatus);
    if (signUpStatus) {
      setJoinVisible(false);
    }
  }, [signUpStatus]);

  const login = () => {
    dispatch(loginRequest(loginInfo));
  };

  const join = () => {
    dispatch(signUpRequest(joinInfo));
  };

  return (
    <>
      <S.Wrapper>
        <S.Layout>
          <S.Logo to="/">프리차트</S.Logo>
          <S.LinkArea>
            <S.LinkButton>급여차트</S.LinkButton>
            <S.LinkButton to="/GalleryExplore">갤러리</S.LinkButton>
            <S.LinkButton>컨텐츠</S.LinkButton>
            <S.LinkButton to="/ProfileDetail">프로필</S.LinkButton>
          </S.LinkArea>
          <S.ComponentArea>
            <S.Alarm />
            {loginStatus ? (<S.ProfileImage onClick={prflMenuOpen} />) : (<a className="loginBg" type="button" onClick={loginModal} style={{ cursor: "pointer", color: "#111111" }}>로그인</a>) }


            <LoginModal visible={loginVisible} loginModal={loginModal} loginInfo={loginInfo} login={login} joinModal={joinModal} onChangeInput={onChangeInput} loginStatus={loginStatus}/>
            {/* <Modal visible={loginVisible} title="로그인" onClose={loginModal}>
              <S.ModalTitleArea>
                <S.ModalTitleInfo>프리랜서들을 위한 견적 정보 서비스 </S.ModalTitleInfo>
                <p style={{ fontSize: "13px" }}>프리차트에 오신걸 환영합니다 </p>
              </S.ModalTitleArea>
              <div style={{ marginBottom: "15px" }}>
                <S.Ptag>아이디</S.Ptag>
                <S.Input type="text" placeholder="아이디를 입력하세요" name="loginId" value={loginInfo.loginId} onChange={onChangeInput} />
                <S.Ptag>비밀번호</S.Ptag>
                <S.Input type="password" placeholder="비밀번호를 입력하세요" name="pswd" value={loginInfo.pswd} onChange={onChangeInput} />
              </div>
              <S.ModlaButtonArea>
                <S.LoginButton onClick={login}>로그인 하기</S.LoginButton>
                <S.LoginButton style={{ backgroundColor: "#3B5998", color: "#ffffff" }}>페이스북으로 시작하기</S.LoginButton>
                <a role="button" onClick={joinModal} style={{ color: "#111111", cursor: "pointer" }}>이메일로 회원가입하기</a>
              </S.ModlaButtonArea>
            </Modal>
 */}
            <Modal visible={joinVisible} title="회원가입 하기" onClose={joinModal}>
              <div>
                <S.Ptag>이메일</S.Ptag>
                <S.Input type="text" placeholder="이메일을 입력하세요" name="email" onChange={onChangeJoinInput} />
                <S.Ptag>아이디</S.Ptag>
                <S.Input type="text" placeholder="아이디를 입력하세요" name="id" onChange={onChangeJoinInput} />
                <S.Ptag>닉네임</S.Ptag>
                <S.Input type="text" placeholder="닉네임을 입력하세요" name="nickname" onChange={onChangeJoinInput} />
                <S.Ptag>비밀번호</S.Ptag>
                <S.Input type="password" placeholder="비밀번호를 입력하세요" name="pw" onChange={onChangeJoinInput} />
                <S.Ptag>비밀번호 재입력</S.Ptag>
                <S.Input type="password" placeholder="비밀번호를 다시 입력하세요" name="pwc" onChange={onChangeJoinInput} />
              </div>
              <S.CheckboxDiv>
                <S.InputCheckbox />
                <label style={{ display: "flex" }}>
                  <p style={{ color: "#378CEF", fontWeight: "bold" }}>정보이용약관</p>
                  <p>에 동의합니다.</p>
                </label>
              </S.CheckboxDiv>
              <S.LoginButton onClick={join}>회원가입 하기</S.LoginButton>
            </Modal>

          </S.ComponentArea>

        </S.Layout>
        <S.PrflMenu visible={prflMenuVisible}>
          <a className="prfMenu">프로필 보기</a>
          <a className="prfMenu">설정</a>
        </S.PrflMenu>
      </S.Wrapper>
    </>
  );
};

export default Index;
