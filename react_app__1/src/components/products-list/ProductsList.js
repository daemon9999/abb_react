import React, { useEffect } from "react";
import styles from "./ProductsList.module.scss"
import Product from "components/product/Product";
import PropTypes from "prop-types"
import Loader from "components/loader/Loader";

import { useLocation } from "react-router-dom";
import NotAvailable from "components/not-available/NotAvailable";
import { useSelector } from "react-redux";

const ProductsList = ({ itemList }) => {
    const {cartProducts} = useSelector(state => state.cart)
    const {favorites} = useSelector(state => state.favorites)
    const {loading, error} = useSelector(state => state.products)
    const location = useLocation()
  

    useEffect(() => {
        cartProducts.length > 0 ? window['localStorage'].setItem('products', JSON.stringify(cartProducts)) :
        window['localStorage'].removeItem('products')
    }, [cartProducts])

    useEffect(() => {
        favorites.length > 0 ? window['localStorage'].setItem('favorites', JSON.stringify(favorites)) :
        window['localStorage'].removeItem('favorites')
    }, [favorites])



    return (
        <main className={styles.products}>
            {(!!loading && location.pathname === '/') && (<Loader />)}
            {(itemList.length === 0 && location.pathname !== '/') && (
                <NotAvailable type={location.pathname === '/cart' ? 'cart' : location.pathname === '/favorites' ? 'favorite' : ''} />
            )}
            {itemList.length > 0 && (
                <div className={`container ${styles['products__container']}`}>
                    {itemList.map((item) => (
                        <Product


                            product={item}
                            key={item.id}
                        />
                    ))}

                </div>)}

            {error && (<NotAvailable text="Failed to fetch products"/>)}


        </main>
    )


}

export default ProductsList

ProductsList.propTypes = {
    toggleFavorite: PropTypes.func,
    toggleCartProduct: PropTypes.func
}