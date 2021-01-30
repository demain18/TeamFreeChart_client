import styled from "styled-components";

export const ContentsArea = styled.div`
  border: 1px solid #d6d6d6;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  width: 1200px;
  // height: 370px;
  margin-top: 10px;
  line-height: 25px;

  @media (max-width: 780px) {
    width: 100%;
    // height: auto;
    flex-direction: column;
  }

  // restore reset.css ul/li settings
  ul { 
    list-style-type: disc; 
    list-style-position: inside; 
  }
  ol { 
      list-style-type: decimal; 
      list-style-position: inside; 
  }
  ul ul, ol ul { 
      list-style-type: circle; 
      list-style-position: inside; 
      margin-left: 15px; 
  }
  ol ol, ul ol { 
      list-style-type: lower-latin; 
      list-style-position: inside; 
      margin-left: 15px; 
  }
`;

export const ProfileInfoArea = styled.div`
  margin-right: 20px;
  width: 48%;
  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const MapAreaDiv = styled.div`
  border: 1px solid #d6d6d6;
  border-radius: 15px;
  height: 330px;
  margin-top: 5px;
  @media (max-width: 780px) {
    width: 100%;
    height: 200px;
  }
`;

export const IntroductionTitle = styled.p`
  color:#767676;
  font-size : 13px;
`;

export const IntroductionContentsDiv = styled.div`
  margin: 5px 0px 13px 0px;
`;