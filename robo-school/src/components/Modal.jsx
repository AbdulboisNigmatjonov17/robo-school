import React from "react";
import "../styles/Modal.css"; // Modal uchun CSS

const Modal = ({ closeModal, content }) => {
  return (
    <div className="modalContainer" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{content.name}</h2>
        <p>{content.about}</p>
        <button onClick={closeModal} className="modal-close-btn">
          закриты
        </button>
      </div>
    </div>
  );
};

export default Modal;
