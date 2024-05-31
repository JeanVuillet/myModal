import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * Ouvre ou ferme la modale.
 *
 * @param {boolean} isOpen - État actuel de la modale.
 * @param {Function} setIsOpen - Fonction pour changer l'état de la modale.
 * @param {string} modalMessage - Message à afficher dans la modale.
 * @param {string} buttonMessage - Message à afficher sur le bouton de fermeture.
 *
 * Customisation de la modale
 *
 * @param  {object} modalContainer - Définit les styles du conteneur de la modale
 * @param  {object} messageContainer _ Définit les styles du conteneur du message de la modale
 * @param {object} buttonContainer _ Défini les styles du bouton de la modale
 */
function MyModal({
  isOpen,
  setIsOpen,
  modalContainer,
  messageContainer,
  buttonContainer,
  modalMessage,
  buttonMessage,
}) {
  const ModalContainer = styled.div`
    position: absolute;
    width: 30%;
    height: 30%;
    color: black;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    background-color: lightgrey;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: solid black;
    ${modalContainer}
  `;

  const Modal = styled.div`
    display: flex;
    justify-content: center;
    ${messageContainer}
  `;

  const ModalButton = styled.button`
    display: flex;
    justify-content: center;
    width: 30%;
    height: auto;
    ${buttonContainer}
  `;

  function closeModal() {
    if (isOpen) {
      setIsOpen(false);
    }
  }

  return (

  

      <ModalContainer
        className="modalContainer"
        style={{ display:  "none" }}
      >

        <Modal className="modalMessage">
          {modalMessage ? modalMessage : "Opération validée"}
        </Modal>
        <ModalButton onClick={closeModal} className="modalButton">
          {buttonMessage ? buttonMessage : "OK"}
        </ModalButton>
      </ModalContainer>

  );
}

MyModal.propTypes = {
  change: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  modalContainer: PropTypes.object,
  messageContainer: PropTypes.object,
  buttonContainer: PropTypes.object,
  modalMessage: PropTypes.string,
  buttonMessage: PropTypes.string,
};

export default MyModal;
