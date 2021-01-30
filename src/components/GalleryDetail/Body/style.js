import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 16px;
  width: 856px;
  min-height: 200px;
  /* border: 1px solid red; */
  box-sizing: border-box;

  @media (max-width: 780px) {
    width: 100%;
  }
`;
export const DownTriIcon = styled(AiFillCaretDown)`
  width: 15px;
  height: 15px;
  color: #767676;
`;

export const Article = styled.div`
margin-top:38px;
  width: 100%;
  min-height: 100px;
  font-size: 15px;
  line-height: 25px;
  color: #222222;
}
`;
export const ProjectImage = styled.div`
  width: 856px;
  height: 483px;
  border-radius: 5px;
  border: solid 1px #efefef;
  box-sizing: border-box;

  @media (max-width: 780px) {
    width: 100%;
    height: 250px;
  }
`;
export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MoreButton = styled.div`
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7px;
  font-size: 15px;
  font-weight: bold;
  color: #767676;
`;
