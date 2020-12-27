import React, { useState, useEffect } from "react";
import ProfileHeaderArea from "components/ProfileDetail/ProfileHeaderArea";
import ContentsArea from 'components/ProfileDetail/ContentsArea';
import SalaryArea from 'components/ProfileDetail/SalaryArea';
import ProjectArea  from "components/ProfileDetail/ProjectArea";

import * as S from "./style";


const ProfileDetail = () => {

  const [profile, setProfile] = useState({
    name: 'jihee',
    info: 'web'
  })

  //component did mount
  useEffect(()=>{
    console.log('api call');
    // changed name
    setProfile({...profile, name: 'Ghee'});
  },[]);

  return(
    <S.Layout>
        <ProfileHeaderArea profile={profile}/>
        <div>
          <ContentsArea/>
          <SalaryArea/>
          <ProjectArea/>
        </div>
    </S.Layout>

    
  );

};

export default ProfileDetail;
