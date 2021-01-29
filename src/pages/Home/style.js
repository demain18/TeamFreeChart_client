import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 1800px;
  padding-top: 50px;
  /* border: 1px solid red; */
`;


export const ProjectWrap = styled.div`
  min-width: 1200px;

  @media (max-width: 780px) {
    min-width: 400px;
  }
`;
