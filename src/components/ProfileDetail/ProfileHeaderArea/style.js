import styled from "styled-components";
import { AiOutlineEye} from "react-icons/ai";
import { IoMdCreate, IoMdHeartEmpty} from "react-icons/io";

export const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 380px;
  box-sizing: border-box;
  // border: 1px solid blue;
`;

export const HeaderImage = styled.div`
  width : 100%;
  height : 200px;
  background-color: #589fff;
`;

export const ProfileImage = styled.div`
  height: 190px;
  width: 190px;
  background: blue;
  border-radius: 50%;
  margin-bottom : 15px;
  left: 45%;
  position: relative;
`;

export const ProfileName = styled.div`
  position: relative;
  top : -130px;
`;


export const NameDiv = styled.div`
  text-align : center;
  
`;

export const NameP = styled.p`
  font-size: 30pt;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const EditButton = styled.button`
  position: relative;
  float: right;
  right: 115px;
  top: 157px;
  padding: 5px 16px;
`;

export const IconEdit = styled(IoMdCreate)`

`;







