import React, { useState, useEffect } from "react";
import Modal from "common/Modal";
import PropTypes from 'prop-types';
import * as S from "../style";

const JoinModal = ({
  visible, join, joinModal, onChangeJoinInput
}) => (
  <Modal visible={visible} title="회원가입 하기" onClose={joinModal}>
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

);

/* LoginModal.propTypes = {
  loginVisible: PropTypes.bool,
  loginModal: PropTypes.func,
  loginInfo: PropTypes.object,
  login: PropTypes.func,
  joinModal: PropTypes.func
}; */

export default JoinModal;
