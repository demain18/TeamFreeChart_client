import styled, { css } from "styled-components";
import { BsBellFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: grid;
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
  height : 49px;
  width: 1200px;
`;
export const Logo = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  width: 75px;
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

export const Input = styled.input`
  width: 92%;
  height: 5px;
  padding: 15px;
  margin-top:5px;
  margin-bottom : 13px;
  border: solid 1px #d6d6d6;
`;

export const ModalTitleArea = styled.div`
  text-align: center;
  margin-bottom: 25px;
`;

export const ModalTitleInfo = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ModlaButtonArea = styled.div`
  text-align : center;
  & + & {
    margin-bottom : 10px;
  }
`;

export const LoginButton = styled.div`
  cursor: pointer;
  outline: none;
  width: 100%;
  height: 38px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d6d6d6;
  background-color: #e0e0e0;
  color: #141414;
  margin-bottom : 10px;
  font-weight: bold;
`;

export const InputCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  width: 20px;
  height: 20px;
`;

export const CheckboxDiv = styled.div`
  margin-bottom: 13px;
  display: flex;
`;

export const Ptag = styled.p`
  font-size: 13px;
  color: #6E7980;
`;

const visiblePrflMenu = css`
  ${(props) => props.visible
    && css`
      display : grid;
    `}
`;

export const PrflMenu = styled.div`

  position: relative;
  background: #fff;
  width: 150px;
  left: 1060px;
  border: 1px #E0E0E0 solid;
  border-radius: 3px;
  display: none;
  ${visiblePrflMenu}
  a{
    padding: 5px 30px 5px 10px;
    cursor : pointer;
    &:hover {
      background-color: #F7F7F7;
    }
  }
  
`;
