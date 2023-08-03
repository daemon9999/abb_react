import React from 'react';
import styles from "./Button.module.scss"
class Button extends React.Component {
  render() {
    const { backgroundColor, text, onClick } = this.props;

   
    return (
      <button className={styles.btn} style={{
        backgroundColor: backgroundColor,
        borderColor: backgroundColor,
        
      }} onClick={onClick} >
        {text}
      </button>
    );
  }
}

export default Button;