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

