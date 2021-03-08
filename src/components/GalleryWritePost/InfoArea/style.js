import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";

export const Layout = styled.div`
  display: flex;
  margin-top : 15px; 
`;


export const Select = styled.select`
  cursor: pointer;
  outline: none;
  display: flex;
  font-size: 15px;
  color: #767676;
  padding: 0px 10px;
  width: 100%;
  margin-top:5px;
  height: 38px;
  border-radius: 3px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
`;

export const DownTriIcon = styled(AiFillCaretDown)`
  width: 15px;
  height: 15px;
  color: #000;
`;

export const CommentInput = styled.textarea`
  resize: none;
  margin-top: 20px;
  width: 100%;
  height: 242px;
  padding: 15px;
  border: solid 1px #d6d6d6;
  box-sizing: border-box;
  &::placeholder {
    font-size: 15px;
    color: #b5b5b5;
  }
`;

export const InputPeriod = styled.input.attrs({
  type:'number',
})`
  width: 139px;
  height: 38px;
  padding: 15px;
  margin-top:5px;
  border: solid 1px #d6d6d6;
`;


export const SelectDiv = styled.div`
  width: 130px;
  margin-right: 10px;
`;

export const InputCheckbox = styled.input.attrs({
  type:'checkbox',
})`
  width: 20px;
  height: 20px;
`;

export const CheckboxDiv = styled.div`
  margin-top: 30px;
`;