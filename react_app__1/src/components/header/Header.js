import React from 'react'
import styles from "./Header.module.scss"
import { BsFillCartFill } from 'react-icons/bs'
import { MdFavorite } from "react-icons/md"

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const { favorites } = useSelector(state => state.favorites)
  const { cartProducts } = useSelector(state => state.cart)
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


