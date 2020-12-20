import React, { Fragment } from "react";
import ButtonArea from "components/GalleryWritePost/ButtonArea";
import InfoArea from "components/GalleryWritePost/InfoArea";
import ImageArea from "components/GalleryWritePost/ImageArea";

import * as S from "./style";


const GalleryWritePost = () => (
  <Fragment>
    <S.Wrapper>
      <S.Layout>
          <S.TitleInput placeholder="제목"/>
          <ImageArea/>
          <InfoArea/>
         
          <ButtonArea />

      </S.Layout>
    </S.Wrapper>
  </Fragment>

 
);

export default GalleryWritePost;
