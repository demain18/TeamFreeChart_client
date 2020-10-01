import styled from "styled-components";
import { IoMdOptions } from "react-icons/io";
import { AiFillCaretDown } from "react-icons/ai";

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 54px;
  /* border: 1px solid red; */
`;
export const OptionsIcon = styled(IoMdOptions)`
  width: 17px;
  height: 17px;
`;
export const DownTriIcon = styled(AiFillCaretDown)`
  width: 15px;
  height: 15px;
  color: #000;
`;

export const CategorySelect = styled.div`
  cursor: pointer;
  outline: none;
  font-size: 15px;
  color: #1d1d1d;
  display: flex;
  padding: 0px 10px;
  justify-content: space-between;
  align-items: center;
  width: 140px;
  height: 38px;
  border-radius: 3px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  box-sizing: border-box;
`;
export const ButtonRightArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;
export const Select = styled.div`
  cursor: pointer;
  outline: none;
  display: flex;
  font-size: 15px;
  color: #767676;
  padding: 0px 10px;
  width: 95px;
  height: 38px;
  border-radius: 3px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
`;

export const ProjectUploadButton = styled.div`
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  width: 124px;
  height: 38px;
  border-radius: 5px;
  background-color: #589fff;
`;

export const Disc = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #171717;
  font-weight: 350;
`;
