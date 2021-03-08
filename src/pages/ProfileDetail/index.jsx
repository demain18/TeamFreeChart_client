import React, { useState, useEffect } from "react";
import ProfileHeaderArea from "components/ProfileDetail/ProfileHeaderArea";
import ContentsArea from 'components/ProfileDetail/ContentsArea';
import SalaryArea from 'components/ProfileDetail/SalaryArea';
import ProjectArea  from "components/ProfileDetail/ProjectArea";
import ProjectGrid from "components/GalleryExplore/ProjectGrid";


import { useDispatch } from "react-redux";
import { loginRequest } from 'modules/SignInModule';
import * as S from "./style";

import axios from 'axios';

const ProfileDetail = () => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({
    name: 'jihee',
    info: 'web'
  });
  const [error, setError] = useState(null);

  // component did mount
  useEffect(() => {
    const fetchUsers = async () =>{
      try {
        const response = await axios.get('/1.0/api/check');
        console.log(response);
      } catch (e) {
        setError(e);
      }
    };

    fetchUsers();
    // changed name
    setProfile({ ...profile, name: 'Ghee' });
  }, []);

  const onSubmit = (form) => {
    dispatch(loginRequest(form));
  };

  return (
    <S.Layout>
      <ProfileHeaderArea profile={profile} />
      <div>
        <ContentsArea />
        <SalaryArea />
        <ProjectArea />
      </div>
      {/* <button type="submit" onClick={() => onSubmit({ id: "test", pw: "test1234" })}>테스트</button> */}
    </S.Layout>

  );
};

export default ProfileDetail;
