import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 352px;
  height: 360px;
  /* background-color: #f2f2f2;
  opacity: 0.2; */

  @media (max-width: 780px) {
    height: 300px;
  }
`;
export const DownIcon = styled(FiChevronDown)`
  width: 20px;
  height: 20px;
`;
export const SelectWrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 780px) {
    // display: none;
    position: absolute;
    top: 60px;
  }
`;
export const Select = styled.div`
  cursor: pointer;
  display: flex;
  padding: 0px 10px;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  color: #1d1d1d;
  width: 170px;
  height: 38px;
  border-radius: 3px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;

  @media (max-width: 780px) {
    width: 100%;
    // margin-left: 10px;
  }
`;
export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 144px;
  /* border: 1px solid red; */
  box-sizing: border-box;
`;

export const InfoTitle = styled.div`
  font-size: 18px;
  color: #ffffff;
  font-weight: 300;
`;

export const InfoWageArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;
export const InfoWageValue = styled.div`
  color: #fff;
  font-weight: 600;
  /*폰트 굵기 조정*/
  font-size: 50px;
  &.month {
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 10px;
    font-weight: 300;
    /*폰트 굵기 조정*/
  }
`;

export const InfoButton = styled.button`
  cursor: pointer;
  outline: none;
  width: 139px;
  height: 43px;
  border-radius: 5px;
  border: solid 1px #d6d6d6;
  background-color: #ffffff;
  font-size: 18px;
  color: #141414;
`;

export const InfoMore = styled.div`
  width: 100%;
  height: 40px;
  font-size: 15px;
  font-weight: 300;
  /*폰트 굵기 조정*/
  color: #ffffff;
  line-height: 25px;
  margin-bottom: 5px;

  @media (max-width: 780px) {
    position: relative;
    top: 20px;
  }
`;
