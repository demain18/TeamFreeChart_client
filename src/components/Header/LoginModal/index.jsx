import React, { useState, useEffect } from "react";
import Modal from "common/Modal";
import PropTypes from 'prop-types';
import * as S from "../style";

const LoginModal = ({
  visible, loginModal, loginInfo, login, joinModal, onChangeInput, loginStatus
}) => (
  <Modal visible={visible} title="로그인" onClose={loginModal}>
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
);

/* LoginModal.propTypes = {
  loginVisible: PropTypes.bool,
  loginModal: PropTypes.func,
  loginInfo: PropTypes.object,
  login: PropTypes.func,
  joinModal: PropTypes.func
}; */

export default LoginModal;
