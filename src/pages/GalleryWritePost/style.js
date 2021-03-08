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
  display: unset;
  justify-content: space-between;
  align-items: flex-start;
  width: 1200px;
  min-height: 1500px;
  margin: 0px auto;
  /* box-sizing: border-box; */

  @media (max-width: 780px) {
    padding: 0px 20px;
  }
`;

export const TitleInput = styled.input`
  margin-top: 10px;
  width: 683px;
  height: 38px;
  padding: 15px;
  border: solid 1px #d6d6d6;
  box-sizing: border-box;
  &::placeholder {
    font-size: 15px;
    color: #b5b5b5;
  }
`;

