import styled from "styled-components";
import { Link } from "react-router-dom";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 1200px;
  margin-top: 64px;
  /* height: 480px; */
  box-sizing: border-box;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const MoreButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #767676;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`;
export const ProjectsArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const ProjectBox = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 290px;
  height: 260px;
`;
export const ProjectImage = styled.div`
  cursor: pointer;
  width: 100%;
  height: 210px;
  border-radius: 5px;
  background-color: #e0e0e0;
`;
export const ProjectTitle = styled.div`
  cursor: pointer;
  font-size: 18px;
  color: #171717;
`;
export const ProjectValue = styled.div`
  font-size: 13px;
  color: #767676;
`;
