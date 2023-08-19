import React from 'react'
import styles from "./Header.module.scss"
import { BsFillCartFill } from 'react-icons/bs'
import { MdFavorite } from "react-icons/md"
import PropTypes from "prop-types"
import { useProducts } from 'context/ContextProvider'
import { Link } from 'react-router-dom'

const Header = () => {
  const { favorites, cartProducts } = useProducts()
  return (
    <header className={styles.header}>

      <div className={`container ${styles['header__container']}`}>
        <div className={styles['logo']}>
          <Link to={'/'}>
            <h2 >
              ENJOY YOUR TECHNOLOGY
            </h2>
          </Link>
        </div>

        {/* For icons, I used react-icons library, I think it will not be a problem */}
        <div className={styles['header__actions']}>

          <Link to={'/cart'} className={styles['cart-container']} >
            <BsFillCartFill size={28} />
            {!!cartProducts?.length && (<span className={styles.number}>{cartProducts.length}</span>)}
          </Link>



          <Link to={'/favorites'} className={styles['favorites-container']} >

            <MdFavorite size={28} />
            {!!favorites?.length && <span className={styles.number}>{favorites.length}</span>}

          </Link>

        </div>


      </div>

    </header>
  )
}


export default Header


Header.propTypes = {
  favoritesCount: PropTypes.number,
  cartProductsCount: PropTypes.number
}