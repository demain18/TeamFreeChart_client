import styled from "styled-components";
import { IoMdCloseCircle,IoMdHelpCircle } from "react-icons/io";

export const Layout = styled.div`
  display: flex;
  margin-top : 15px; 
`;


export const UploadImageDiv = styled.div`
  width: 190px;
  height: 144px;
  border : solid 1px #d6d6d6;
  background-color: #d6d6d6;
  margin-right: 15px;
  position : relative
`;

export const DefaultDiv = styled.div`
  margin-top : 15px;
  display: flex;
`;


export const ImageFileInput = styled.input.attrs({
  type: 'file',
})`
  display : none;
`;

export const InfoButton = styled.div`
  cursor: pointer;
  outline: none;
  width: 124px;
  height: 38px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d6d6d6;
  background-color: #e0e0e0;
  color: #141414;
`;

export const QuestionButton = styled(IoMdHelpCircle)`
  height: 22px;
  width: 22px;
  margin: 8px 0px 0px 10px;
`;

export const ImageCloseButton = styled(IoMdCloseCircle)`
  height: 22px;
  width: 22px;
  position : relative;
  top : -153px;
  left : 180px;
`;
