import React from "react";
import * as S from "./style";

const ProfileDetail = (props) => {
  const {profile} = props;
  console.log({profile});

  const projectInfoArr = [
    {
      title: 'web service',
      eye: '1.2'
    }
  ]
  return (
      <S.Wrapper>
          <S.HeaderImage>
            <S.EditButton>
              프로필 편집하기 
              <S.IconEdit/>
            </S.EditButton>
          </S.HeaderImage>
          <S.ProfileName>
            <S.ProfileImage/>
            {profile.name && profile.info && <S.NameDiv>
              <S.NameP>{profile.name}</S.NameP>
              <S.NameI>{profile.info}</S.NameI>
            </S.NameDiv>}
          </S.ProfileName>
      </S.Wrapper>
  );
}

export default ProfileDetail;
