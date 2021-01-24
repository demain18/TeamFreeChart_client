import React from "react";
import * as S from "./style";

const SalaryArea = (props) => {
 
  return (
    <S.SalaryArea>
        <S.ExpectedSalaryTitle role="img" aria-label="money">희망 급여 💵</S.ExpectedSalaryTitle>
        <S.ExpectedSalaryDiv>
        <p style={{fontSize:"30px"}} >3,500,000원</p>
        <p style={{fontSize:"18px"}}>/1개월</p>
        </S.ExpectedSalaryDiv>
        <S.ExpectedTime>주 25시간 근무</S.ExpectedTime>  
       {/*  <S.FoldButton>접기∧</S.FoldButton> */}

    </S.SalaryArea>
  );
};

export default SalaryArea;