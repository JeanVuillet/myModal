import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function MyModal({ change, isOpen, setIsOpen, containerObject, modalObject, buttonObject, modalMessage, buttonMessage }) {

  const ModalContainer = styled.div`
    position: absolute;
    width: 30%;
    height: 30%;
    color: black;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    background-color: lightgrey;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: solid black;
    ${containerObject}
  `;

  const Modal = styled.div`
    display: flex;
    justify-content: center;
    ${modalObject}
  `;

  const ModalButton = styled.button`
    display: flex;
    justify-content: center;
    width: 30%;
    height: auto;
    ${buttonObject}
  `;

  const [isChaned, setIsChanged] = useState(change);



  useEffect(() => {

    setIsChanged(prevValue=>!prevValue);
  

  

  }, [change]);

  function closeModal() {

    if (isChaned){
    setIsChanged(false);
    }
    else if (isOpen){
      setIsOpen(false)
    }




  }

  return (
    <ModalContainer className="modalContainer" style={{ display:  (isChaned || isOpen) ? 'flex' : 'none' }}>
      <Modal className="modalMessage">
        {modalMessage ? modalMessage : 'Opération validée'}
      </Modal>
      <ModalButton onClick={closeModal} className="modalButton">
        {buttonMessage ? buttonMessage : 'OK'}
      </ModalButton>
    </ModalContainer>
  );
}

MyModal.propTypes = {
  open: PropTypes.bool.isRequired,
  ContainerObject: PropTypes.string,
  ModalObject: PropTypes.string,
  buttonObject: PropTypes.string,
  modalMessage: PropTypes.string,
  buttonMessage: PropTypes.string,
};

export default MyModal;
