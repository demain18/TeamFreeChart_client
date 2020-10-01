import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 200px;
  padding-top: 95px;
  padding-right: 25px;
  padding-left: 25px;
  box-sizing: border-box;
  /* border: 1px solid red; */
`;

export const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* border: 1px solid red; */
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #171717;
`;
export const Disc = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #171717;
  font-weight: 350;
`;
