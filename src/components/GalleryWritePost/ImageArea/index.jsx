import React, { Fragment } from "react";
import { Tooltip, Button } from 'antd';

import * as S from "./style";

const ButtonArea = () => (
  <>
    <S.Layout>
      <label className="custom-file-upload">
        <input type="file" multiple onChange={{}} style={{ display: "none" }}/>
        <S.InfoButton>이미지 업로드</S.InfoButton>
      </label>
      {/* <S.ImageFileInput /> */}
      <Tooltip placement="rightTop" title="이미지 등록해주세요.">
        <S.QuestionButton />
      </Tooltip>
    </S.Layout>
    <S.Layout>
      <S.ImageGrid>
        <S.UploadImageDiv />
        <S.ImageCloseButton />
      </S.ImageGrid>
      <S.ImageGrid>
        <S.UploadImageDiv />
        <S.ImageCloseButton />
      </S.ImageGrid>
      <S.ImageGrid>
        <S.UploadImageDiv />
        <S.ImageCloseButton />
      </S.ImageGrid>
    </S.Layout>
  </>
);

export default ButtonArea;
