import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";

export const Select = styled.div`
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

export const SelectDiv = styled.div`
  width: 170px;
  margin-right: 10px;
`;

export const SurveyDetail = styled.div`
  border : 1px solid #e0e0e0;
  margin-top : 15px;
  border-radius : 10px;
  padding : 25px;
  background : #ffffff;
`;

export const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  position : relative;
  // width: 60%;
  min-height: 200px;
  padding-top: 70px;
  box-sizing: border-box;

  margin: 0 auto;
  max-width: 800px;

  @media (max-width: 780px) {
    padding: 70px 20px 0px 20px;
  }
`;

export const SurveyDetailTitle = styled.p`
  font-size: 18px;
  margin-bottom : 15px;
`;

export const SelctBoxesDiv = styled.div`
  display : flex;
  color : #767676;
`;

export const SelectDivTitle = styled.p`
  font-size: 14px;
`;

export const PayInput = styled.input.attrs({
  type : 'number',
})`
  height: 30px;
  width: 30%;
  border-radius: 3px;
  border: solid 1px #e0e0e0;
  text-align: right;
`;

export const MonthP = styled.p`
  margin-left: 5px;
  margin-top: 10px;
`;

export const SurveyUploadButton = styled.div`
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  width: 94px;
  height: 38px;
  border-radius: 5px;
  background-color: #589fff;
  margin-top : 15px;
`;