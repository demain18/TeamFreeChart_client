import styled from "styled-components";
import { AiFillFacebook } from "react-icons/ai";

export const ModalLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  width: 280px;
  height: 300px;
  border: 1px solid #cdcdcd;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: ${(props) => props.value};
`;
