import React, { useState, useEffect } from "react";
import ProfileHeaderArea from "components/ProfileDetail/ProfileHeaderArea";
import ContentsArea from 'components/ProfileDetail/ContentsArea';
import SalaryArea from 'components/ProfileDetail/SalaryArea';
import ProjectArea  from "components/ProfileDetail/ProjectArea";
import ProjectGrid from "components/GalleryExplore/ProjectGrid";

import * as S from "./style";


const ProfileDetail = () => {

  const [profile, setProfile] = useState({
    name: '테스트',
    info: 'Front-end Engineer'
  })

  //component did mount
  useEffect(()=>{
    console.log('api call');
    // changed name
    setProfile({...profile, name: 'Tester'});
  },[]);

  return(
    <S.Layout>
        <ProfileHeaderArea profile={profile}/>
        <S.ContentGrid>
          <ContentsArea/>
          <SalaryArea/>
          {/* <ProjectArea/> */}
          <ProjectGrid />
        </S.ContentGrid>
    </S.Layout>
  );
};

export default ProfileDetail;
