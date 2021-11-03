import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

function Modal({ tags, modalImg, closeModal }) {
  useEffect(() => {
    function onEscPressHandle(e) {
      if (e.code === 'Escape') {
        closeModal();
      }
    }

    window.addEventListener('keydown', onEscPressHandle);

    return function cleanup() {
      window.removeEventListener('keydown', onEscPressHandle);
    };
  }, [closeModal]);

  function onBackdropClickHandle(e) {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  }

  return createPortal(
    <div className="Overlay" onClick={onBackdropClickHandle}>
      <div className="Modal">
        <img src={modalImg} alt={tags} />
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  tags: PropTypes.string,
  modalImg: PropTypes.string,
  closeModal: PropTypes.func,
};

export default Modal;
