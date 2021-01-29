import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  // height: 207px;
  // background-color: #589fff;
  margin-top: 70px;

  @media (max-width: 780px) {
    // height: 150px;
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
    width: 100%;
    padding: 0px 20px;
    margin-bottom: 0px;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const MoreButton = styled.div`
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