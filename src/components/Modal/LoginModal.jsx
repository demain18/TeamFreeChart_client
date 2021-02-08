import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoMdClose } from "react-icons/io";

function Modal({ className, visible, children, title, onClose}) {
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper className={className} tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0" className="modal-inner">
          <ModalHeader>
            <ModlaTitle>
              {title}
              <CloseButton onClick={onClose}/>
            </ModlaTitle>

          </ModalHeader>
          <ModalContent>
            {children}
          </ModalContent>
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

Modal.propTypes = {
  visible: PropTypes.bool,
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 5px;
  width:450px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
`;

export const ModalHeader = styled.div`
  display : flex;
  padding-bottom : 7px;
  border-bottom : 0.1px solid #E8E8E8;
`;
export const ModlaTitle = styled.p`
  font-weight: bold;
  width: 100%;
  text-align: center;
`;

export const CloseButton = styled(IoMdClose)`
  height: 22px;
  width: 22px;
  margin: 8px 0px 0px 10px;
  left: 40%;
  position: relative;
  cursor:pointer;
`;

export const ModalContent = styled.div`
  padding: 40px 20px;
`;

export default Modal;
