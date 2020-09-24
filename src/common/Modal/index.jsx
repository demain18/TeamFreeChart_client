import React, { Fragment } from "react";

// style
import * as S from "./style";
import * as B from "../Button/style";
import { SmallButton } from "....";
const a = () => {
  <SmallButton color={}></SmallButton>;
};
const aa = () => {
  alert("ss");
};
const SnsModal = ({ text }) => {
  return (
    <Fragment>
      <S.ModalLayout>
        <B.SnsButton onClick={aa}>{text}</B.SnsButton>
      </S.ModalLayout>
    </Fragment>
  );
};

const SnsModal_L = ({ text }) => {
  return (
    <Fragment>
      <S.ModalLayout>
        <B.SnsButton>{text}</B.SnsButton>
        <B.SnsButton>{text}</B.SnsButton>
      </S.ModalLayout>
    </Fragment>
  );
};
export default { SnsModal, SnsModal_L };
