import React, { Fragment } from "react";

// style
import * as S from "./style";

const Button = ({children, size, color}) => {
  return (
    <>
      <S.Layout >
        {children}
      </S.Layout>
    </>
  )
}

export default Button;
