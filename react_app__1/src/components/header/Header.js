import React from 'react'
import styles from "./Header.module.scss"
import { BsFillCartFill } from 'react-icons/bs'
import { MdFavorite } from "react-icons/md"
import PropTypes from "prop-types"
class Header extends React.Component {



  render() {

    const { favoritesCount, cartProductsCount } = this.props
    return (
      <header className={styles.header}>

        <div className={`container ${styles['header__container']}`}>
          <div className={styles['logo']}>
            <h2 >
              ENJOY YOUR TECHNOLOGY
            </h2>
          </div>

          {/* For icons, I used react-icons library, I think it will not be a problem */}
          <div className={styles['header__actions']}>
            <span className={styles['cart-container']}>
              <BsFillCartFill size={28} />
              {!!cartProductsCount && (<span className={styles.number}>{cartProductsCount}</span>)}
            </span>

            <span className={styles['favorites-container']}>
              <MdFavorite size={28} />
              {!!favoritesCount && <span className={styles.number}>{favoritesCount}</span>}
            </span>

          </div>


        </div>

      </header>
    )
  }
}

export default Header


Header.propTypes = {
  favoritesCount: PropTypes.number,
  cartProductsCount: PropTypes.number
}