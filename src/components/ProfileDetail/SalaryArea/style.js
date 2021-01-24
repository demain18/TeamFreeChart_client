import styled from "styled-components";

export const SalaryArea = styled.div`
  border: 1px solid #d6d6d6;
  border-radius : 5px;
  padding: 15px;
  text-align :  center;
  background-color : #256E4F;
  width: 1200px;
  height: 175px;
  margin-top: 15px;
  /* &:active {
    background : #1A4D37;
    height : 85px;
  } */
`;

export const ExpectedSalaryTitle = styled.span`
  color: #74b289;
  font-weight: bold;
  font-size: 18px;
`;

export const ExpectedSalaryDiv = styled.div`
  color: #ebebeb;
  display: flex;
  align-items: flex-end;
  left: 40.5%;
  position: relative;
  margin : 10px 0px 5px 0px;
  width: fit-content;
`;

export const ExpectedTime = styled.p`
  color: #ebebeb;
  font-size: 18px;
`;

export const FoldButton = styled.div`
  font-size: 13px;
  color: rgba(255,255,255,0.6);
  position: relative;
  top : 35px;
`;