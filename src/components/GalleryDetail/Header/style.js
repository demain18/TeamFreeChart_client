import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 69px;
  /* border: 1px solid red; */

  @media (max-width: 780px) {
    margin-bottom: 70px;
  }
`;

export const Title = styled.div`
  height: 46px;
  font-size: 40px;
  font-weight: 500;
  color: #222222;
`;
export const Category = styled.div`
  height: 18px;
  font-size: 15px;
  font-weight: 500;
  color: #767676;
`;
