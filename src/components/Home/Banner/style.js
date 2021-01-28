import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 207px;
  background-color: #589fff;
  margin-top: 70px;

  @media (max-width: 780px) {
    height: 150px;
  }
`;
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 1200px;
  margin: 0px auto;
  /* padding: 55px 360px; */
  /* height: 480px; */
  /* box-sizing: border-box; */

  @media (max-width: 780px) {
    padding: 0px 20px;
  }
`;
export const Title = styled.span`
  font-size: 50px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 5px;

  @media (max-width: 780px) {
    font-size: 30px;
  }
`;
export const Disc = styled.div`
  font-size: 18px;
  color: #fff;
`;
