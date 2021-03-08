import styled from "styled-components";
import { IoMdCloseCircle,IoMdHelpCircle } from "react-icons/io";

export const Layout = styled.div`
  display: flex;
  margin-top : 15px;
  // border: 1px solid blue;
  @media (max-width: 780px) {
  }
`;


export const UploadImageDiv = styled.div`
  width: 190px;
  height: 144px;
  border : solid 1px #d6d6d6;
  background-color: #d6d6d6;
  margin-right: 15px;
  position : relative;

  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const ImageGrid = styled.div`
  margin-top : 5px;
  display: flex;
  position: relative;

  @media (max-width: 780px) {
    width: 100%;
  }
  // border: 1px solid red;
`;


export const ImageFileInput = styled.input.attrs({
  type: 'file',
})`
  display : none;
`;

export const InfoButton = styled.div`
  cursor: pointer;
  outline: none;
  width: 109px;
  height: 29px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d6d6d6;
  background-color: #e0e0e0;
  color: #141414;
  margin-top: 5px;
`;

export const QuestionButton = styled(IoMdHelpCircle)`
  height: 22px;
  width: 22px;
  margin: 8px 0px 0px 10px;
`;

export const ImageCloseButton = styled(IoMdCloseCircle)`
  height: 22px;
  width: 22px;

  position: absolute;
  top: -10px;
  right: 5px;
  z-index: 2;
`;
