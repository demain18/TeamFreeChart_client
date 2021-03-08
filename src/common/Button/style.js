import styled from "styled-components";
import { AiFillFacebook } from "react-icons/ai";

export const Layout = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const FaceBookIcon = styled(AiFillFacebook)`
  width: 18px;
  height: 18px;
`;

export const SmallButtonG = styled.button`
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  color: #000;
  width: 97px;
  height: 29px;
  border-radius: 5px;
  border: none;
  box-sizing: border-box;
  /* background-color: #e0e0e0; */
  background-color: ${(props) => props.value};
  &:hover {
    background-color: #c4c4c4;
  }
`;

export const SmallButtonB = styled.button`
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  color: #fff;
  width: 97px;
  height: 29px;
  border-radius: 5px;
  border: none;
  box-sizing: border-box;
  background-color: #589fff;
  &:hover {
    background-color: #4581d3;
  }
`;

export const ButtonG = styled.button`
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  color: #000;
  width: 110px;
  height: 38px;
  border-radius: 5px;
  border: none;
  box-sizing: border-box;
  background-color: #e0e0e0;
  &:hover {
    background-color: #c4c4c4;
  }
`;

export const ButtonB = styled.button`
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  width: 110px;
  height: 38px;
  border-radius: 5px;
  border: none;
  box-sizing: border-box;
  background-color: #589fff;
  &:hover {
    background-color: #4581d3;
  }
`;

export const BigButtonW = styled.button`
  font-size: 18px;
  width: 160px;
  height: 43px;
  border-radius: 5px;
  border: solid 1px #d6d6d6;
  background-color: #ffffff;
`;

export const SnsButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
  padding: 0px 20px;
  width: 176px;
  height: 40px;
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
  background-color: #3b5998;
  /* background-color: ${(props) => props.color || "white"}; */
`;
