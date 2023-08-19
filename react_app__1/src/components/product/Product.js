import React, { useState } from "react";
import styles from "./Product.module.scss"
import PropTypes from "prop-types"
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'

import { useProducts } from "context/ContextProvider";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { BsCheckLg } from "react-icons/bs";



const Product = ({ product }) => {

    const { toggleCartProduct, toggleFavorite, closeModal, appendModal, favorites, cartProducts } = useProducts()

    const location = useLocation()
    const addModalData = {
        header: 'Add A Product To The Cart',
        closeButton: true,
        text: `Do you want to add product ${product.name
            } to the cart?`,
        closeModal,
        actions: <><button onClick={() => {
            product.isAdded = true
            closeModal()
            toggleCartProduct(product)
        }} className={styles["modal-btn btn-success"]}>Add</button>
            <button onClick={() => closeModal()} className={styles["modal-btn btn-danger"]}>Cancel</button></>
    }

    const removeModalData = {
        header: 'Remove A Product From The Cart',
        closeButton: true,
        text: `Do you want to remove product ${product.name
            } from the cart?`,
        closeModal,
        actions: <><button onClick={() => {
            delete product.isAdded
            closeModal()
            toggleCartProduct(product)
        }} className={styles["modal-btn btn-success"]}>Remove</button>
            <button onClick={() => closeModal()} className={styles["modal-btn btn-danger"]}>Cancel</button></>
    }


    const isFavProduct = favorites?.find(fav => fav.id === product.id) ? true : false
    const isCartProduct = cartProducts?.find(cp => cp.id === product.id) ? true : false

    !!isCartProduct ? (product.isAdded = true) : delete product?.isAdded
    !!isFavProduct ? (product.isFavorite = true) : delete product?.isFavorite


    const { name, imgUrl, price, sku, color } = product

    return (
        <>

            <div className={styles.product}>
                <div className={styles['product__header']}>
                    <h4 >{name}</h4>
                </div>
                <div className={styles['product__img']}>
                    <img alt={name} src={imgUrl} />
                </div>

                <div className={styles['product__details']}>
                    <div className={styles['detail']}>
                        <p className={styles['detail__label']}>Price:</p>
                        <p className={styles['detail__value']}>${price}</p>
                    </div>
                    <div className={styles['detail']}>
                        <p className={styles['detail__label']}>SKU:</p>
                        <p className={styles['detail__value']}>{sku}</p>
                    </div>
                    <div className={styles['detail']}>
                        <p className={styles['detail__label']}>Color:</p>
                        <p className={styles['detail__value']}>
                            {color}
                            <span className={styles['color']} style={{
                                background: color.toLowerCase()
                            }} />
                        </p>
                    </div>

                </div>

                <div className={styles['product__actions']}>
                    {location.pathname === '/cart' ? (
                        <button onClick={() => appendModal(removeModalData)} type="button" className={`${styles['cart']}`}>Remove</button>
                    ) : (
                        <button onClick={() => appendModal(addModalData)} disabled={product.isAdded} type="button" className={`${styles['cart']}`}>{product.isAdded ? 'Added' : 'Add to cart'}</button>
                    )}
                    <button onClick={() => {

                        if (product.isFavorite) {
                            delete product.isFavorite
                        } else {
                            product.isFavorite = true
                        }
                        toggleFavorite(product)
                    }} type="button" className={styles['favorite']}>

                        {product.isFavorite ? <MdOutlineFavorite size={28} /> : <MdOutlineFavoriteBorder size={28} />}
                    </button>

                </div>

            </div>
        </>
    )
}

export default Product

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        imgUrl: PropTypes.string.isRequired,
        sku: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool,
        isAdded: PropTypes.bool

    })
}