import React from 'react';
import styles from "./Button.module.scss"

const Button = ({ backgroundColor, text, onClick }) => {
  return (
    <button className={styles.btn} style={{
      backgroundColor: backgroundColor,
      borderColor: backgroundColor,

    }} onClick={onClick} >
      {text}
    </button>
  );
}

export default Button;