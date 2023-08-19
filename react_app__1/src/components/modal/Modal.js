import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.scss';
import PropTypes from "prop-types"


const Modal = (props) => {
  const { header, closeButton, text, actions, closeModal } = props
  const modalRef = useRef()
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {

    window.addEventListener('mousedown', handleOutsideClick);



    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles['modal-container']}>
      <div className={styles['modal']} ref={modalRef} >
        <div className={styles['modal__header']}>
          <h2>{header}</h2>
          {closeButton && (
            <button className={styles['close-btn']} onClick={closeModal}>
              X
            </button>
          )}
        </div>
        <div className={styles['modal__content']}>
          <p>{text}</p>
        </div>
        <div className={styles['modal__actions']}>{actions}</div>
      </div>
    </div>
  );
}






export default Modal;


Modal.propTypes = {
  header: PropTypes.string.isRequired,
  closeButton: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  actions: PropTypes.node,
  closeModal: PropTypes.func

}