import styled from "styled-components";
import { AiOutlineEye} from "react-icons/ai";
import {  IoMdHeartEmpty} from "react-icons/io";

export const ProjectArea = styled.div`
  height: 260px;
  margin-top: 60px;
`;

export const ProjectAreaTitle = styled.p`
  font-size:18px;
`;

export const ProjectContensArea = styled.div`
  margin-top: 10px;
  display: flex;
`;

export const ContentDiv = styled.div`
  margin-right : 13px;
`;

export const ProjectImage = styled.div`
  width: 290px;
  height: 210px;
  border: 1px solid #d6d6d6;
  border-radius: 3%;
  margin-bottom: 10px;
  background : #E0E0E0;
`;

export const IconEye = styled(AiOutlineEye)`

`;
export const IconHeart = styled(IoMdHeartEmpty)`

`;
