import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { getProjectRequest } from 'modules/ProjectModule';
import OptionSelector from "components/GalleryExplore/OptionSelector";
import Pagination from "components/GalleryExplore/Pagination";
import ProjectGrid from "components/GalleryExplore/ProjectGrid";
import * as S from "./style";

const GalleryExplore = () => {
  const [listParam, setListParam] = useState({
    category: 2,
    categoryDetail: 1,
    page: 1
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectRequest(listParam));
  }, []);

  return (
    <>
      <S.Layout>
        <S.TitleArea>
          <S.Title>프로젝트 갤러리 </S.Title>
          <S.Disc>이주의 인기 프로젝트입니다</S.Disc>
        </S.TitleArea>
        <OptionSelector />
        <ProjectGrid />
        <Pagination />
      </S.Layout>
    </>
  );
};

// Home.propTypes = {};
export default GalleryExplore;
