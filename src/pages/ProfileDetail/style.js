import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 200px;
  margin-top: 96px;
  box-sizing: border-box;
`;

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

export const ContentGrid = styled.div`
  @media (max-width: 780px) {
    padding: 0px 20px;
  }
`;


export const TitleInput = styled.input`
  margin-top: 10px;
  width: 50%;
  height: 30px;
  padding: 15px;
  border: solid 1px #d6d6d6;
  box-sizing: border-box;
  &::placeholder {
    font-size: 15px;
    color: #b5b5b5;
  }
`;

