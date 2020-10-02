import { Link } from "react-router-dom";
import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 45px;
  /* border: 1px solid red; */
`;
export const ProjectBox = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 246px;
`;
export const ProjectImage = styled.div`
  width: 100%;
  height: 210px;
  border-radius: 5px;
  background-color: #e0e0e0;
`;
export const ProjectTitle = styled.div`
  font-size: 13px;
  color: #171717;
`;
export const ProjectInfo = styled.div`
  font-size: 10px;
  color: #888888;
`;

export const GridContainer = styled.div`
  margin-top: 10px;
  height: 100%;
  width: 100%;
  display: grid;
  justify-content: space-between;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);

  /* grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr); */
`;
