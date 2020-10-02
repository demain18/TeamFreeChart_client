import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 15px;
  /* border: 1px solid red; */
`;
export const Header = styled.div`
  height: 21px;
  font-size: 18px;
  color: #1d1d1d;
`;
export const CommentInput = styled.textarea`
  resize: none;
  margin-top: 10px;
  width: 100%;
  height: 100px;
  padding: 15px;
  border: solid 1px #d6d6d6;
  box-sizing: border-box;
  &::placeholder {
    font-size: 15px;
    color: #b5b5b5;
  }
`;
