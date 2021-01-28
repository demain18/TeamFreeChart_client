import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 480px;
  box-sizing: border-box;

  @media (max-width: 780px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 480px;
  padding: 56px 0px;
  box-sizing: border-box;
  background-color: #589fff;

  // width: 400px;
  // height: 800px;

  @media (max-width: 780px) {
    height: 500px;
  }
`;

// @media ('max-width: 780px') {

// }