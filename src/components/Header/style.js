import styled from "styled-components";
import { BsBellFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  border: solid 1px #d6d6d6;
  border-top: none;
  border-right: none;
  border-left: none;
  background-color: #ffffff;
  z-index : 9000;
`;
export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
`;
export const Logo = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  width: 70px;
  font-size: 18px;
  font-weight: bold;
  color: #212121;
`;
export const LinkArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 228px;
`;
export const LinkButton = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  color: #212121;
`;
export const ComponentArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70px;
`;

export const ProfileImage = styled.div`
  cursor: pointer;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #e0e0e0;
`;

export const Alarm = styled(BsBellFill)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  color: #212121;
`;
