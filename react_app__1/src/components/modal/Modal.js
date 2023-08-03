import React from 'react';
import styles from './Modal.module.scss'; // Import SCSS file for Modal styles

class Modal extends React.Component {

  handleClickOutside = (event) => {
    if (this.modalRef && !this.modalRef.contains(event.target)) {
      this.props.closeModal();
    }
  };
  
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }






  render() {
    const { header, closeButton, text, actions, closeModal } = this.props;


    return (
      <div className={styles['modal-container']}>
        <div className={styles['modal']} onBlur={closeModal} tabIndex={-1} ref={(ref) => (this.modalRef = ref)}>
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
}

export default Modal;