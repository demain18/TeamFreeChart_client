import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { writeRequest } from 'modules/ProjectModule';

import ButtonArea from "components/GalleryWritePost/ButtonArea";
import InfoArea from "components/GalleryWritePost/InfoArea";
import ImageArea from "components/GalleryWritePost/ImageArea";

import * as S from "./style";

const GalleryWritePost = () => {
  const [project, setProject] = useState({
    category: '',
    categoryDetail: '',
    r18: '',
    memberCount: '',
    period: '',
    title: '',
    desc: ''
  });

  const onChangeInput = (e) => {
    const { value, name } = e.target;
    setProject({
      ...project,
      [name]: value
    });
  };

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    console.log(project);
    dispatch(writeRequest(project));
  };

  /*   const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.login.loginStatus);

  useEffect(() => {
    console.log(loginStatus);
    if (loginStatus) {
      if(loginStatus.data){
        //SetLoginVisible(false);
      }
    }
  }, [loginStatus]);

  const login = () => {
    //dispatch(loginRequest(loginInfo));
  };
 */
  return (
    <>
      <S.Wrapper>
        <S.Layout>
          <form onSubmit={submit}>
            <S.TitleInput placeholder="제목" name="title" onChange={onChangeInput} />
            <ImageArea onChangeInput />
            <InfoArea onChangeInput={onChangeInput} />
            <ButtonArea submit={submit} />
          </form>

        </S.Layout>
      </S.Wrapper>
    </>
  );
};

export default GalleryWritePost;
