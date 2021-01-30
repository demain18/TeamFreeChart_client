import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 1200px;
  min-height: 1500px;
  margin: 0px auto;
  /* box-sizing: border-box; */

  @media (max-width: 780px) {
    width: 100%;
    flex-direction: column;
    padding: 0px 20px;
  }
`;
export const LeftArea = styled.div``;
export const RightArea = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 85px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 200px;
  margin-top: 96px;
  box-sizing: border-box;
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
