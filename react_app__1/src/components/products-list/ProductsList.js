import React, { useEffect } from "react";
import styles from "./ProductsList.module.scss"
import Product from "components/product/Product";
import PropTypes from "prop-types"
import Loader from "components/loader/Loader";
import { useProducts } from "context/ContextProvider";
import { useLocation } from "react-router-dom";
import NotAvailable from "components/not-available/NotAvailable";

const ProductsList = ({ itemList }) => {
    const { loadingProducts, cartProducts, favorites } = useProducts()

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
            {(!!loadingProducts && location.pathname === '/') && (<Loader />)}
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


        </main>
    )


}

export default ProductsList

ProductsList.propTypes = {
    toggleFavorite: PropTypes.func,
    toggleCartProduct: PropTypes.func
}