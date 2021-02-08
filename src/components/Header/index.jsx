/* eslint-disable jsx-a11y/accessible-emoji */
// 이모지 부분 warning 비활성화
import React, { useState } from "react";
import * as S from "./style";
import Modal from "../Modal/LoginModal";
// import Modal from "common/Modal"
import axios from 'axios';
import { useCookies } from 'react-cookie';

const Index = ({ loginStatus , setLoginStatus }) => {
  const [loginVisible, SetLoginVisible] = useState(false);
  const [error, setError] = useState(null);
  const [loginInfo, setLoginInfo] = useState({
    loginId :'',
    pswd : ''
  });
  const [cookies, setCookie, removeCookie ] =useCookies(['tokenCookie']);

  const loginModal = () => {
    console.log("####");
    SetLoginVisible(!loginVisible);
  };

  const onChangeInput = (e) =>{
    const {value, name} = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]:value
    });
  };


  const login = async () => {
    try {
      const response = await axios.post('/1.0/api/auth/login',{
        "id" : loginInfo.loginId,
        "pw" : loginInfo.pswd
    });
    /* "email": "leejh@dev.com",
        "nickname": "이지희",
        "id": "leejh",
        "pw": "1234",
        "pwc": "1234" */
      console.log(response);
      if(response.data.result){
        setCookie('tokenCookie',response.data.data.token, {maxAge : 2000});
        loginModal();
        setLoginStatus(true);

      }
      
    } catch (e) {
      setError(e);
    }
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
            {loginStatus ? (<S.ProfileImage />) : (<button className="loginBg" type="button" onClick={loginModal}>로그인</button>) }
            
            <Modal visible={loginVisible} title="로그인" onClose={loginModal}>
              <S.ModalTitleArea> 
                <S.ModalTitleInfo>프리랜서들을 위한 견적 정보 서비스 </S.ModalTitleInfo>
                <p style={{fontSize:"13px"}}>프리차트에 오신걸 환영합니다 </p>
              </S.ModalTitleArea>
              <div style={{marginBottom:"15px"}}>
                <p>아이디</p>
                <S.Input type="text" placeholder="아이디를 입력하세요" name="loginId" value={loginInfo.loginId} onChange={onChangeInput}/>
                <p>비밀번호</p>
                <S.Input type="password" placeholder="비밀번호를 입력하세요" name="pswd" value={loginInfo.pswd}  onChange={onChangeInput}/>
              </div>
              <S.ModlaButtonArea>
                <S.LoginButton onClick={login}>로그인 하기</S.LoginButton>
                <S.LoginButton style={{backgroundColor:"#3B5998",color:"#ffffff"}}>페이스북으로 시작하기</S.LoginButton>
                <p>이메일로 회원가입하기</p>
              </S.ModlaButtonArea>
            </Modal>

          </S.ComponentArea>
        </S.Layout>
      </S.Wrapper>
    </>
  );
};

export default Index;
