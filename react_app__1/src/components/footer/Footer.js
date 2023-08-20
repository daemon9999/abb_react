import React from 'react'
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>


      <div className={`container ${styles['footer__container']}`}>
        <div className={styles['footer__info']}>
          <a href='#privacypolicy' className={styles.privacy}>Privacy Policy</a>
          <a href='#termsconditions' className={styles.terms}>Terms & Conditions</a>


        </div>
        <h4 className={styles['footer__title']}>
          @2023 Enjoy Your Technology
        </h4>


      </div>



    </footer>
  )
}

export default Footer