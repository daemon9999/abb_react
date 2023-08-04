import React from "react";
import styles from "./Product.module.scss"
import PropTypes from "prop-types"
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import Modal from "components/modal/Modal";
class Product extends React.Component {
    product = this.props.product
    removeModalData = {
        header: 'Removing Product From Cart',
        text: `Are you sure to remove product ${this.product.name} from the cart?`,
        actions: <><button onClick={() => this.handleCart()} className={styles["modal-btn btn-success"]}>Remove</button>
            <button onClick={() => this.closeAddingModal()} className={styles["modal-btn btn-danger"]}>Cancel</button></>
    }

    addModalData = {

        header: 'Add A Product To The Cart',
        text: `Do you want to add product ${this.product.name} to the cart?`,
        actions: <><button onClick={() => this.handleCart()} className={styles["modal-btn btn-success"]}>Add</button>
            <button onClick={() => this.closeAddingModal()} className={styles["modal-btn btn-danger"]}>Cancel</button></>

    }
    state = {
        isFavorite: window['localStorage'].getItem(`favorite-${this.product.id}`) || false,
        isAdded: window['localStorage'].getItem(`product-${this.product.id}`) || false,
        isOpenModal: false,
        modalData: window['localStorage'].getItem(`product-${this.product.id}`) ? this.removeModalData : this.addModalData
    }

    handleFavorite() {
        const { isFavorite } = this.state
        const { toggleFavorite } = this.props
        this.setState({ isFavorite: !isFavorite })
        toggleFavorite(isFavorite ? 'decrease' : 'increase')
        this.handleLocalStorage(isFavorite, 'favorite')
    }

    openModal() {
        this.setState({ isOpenModal: true })

    }

    handleCart() {
        const { isAdded } = this.state
        const { toggleCartProduct } = this.props
        this.setState({ isAdded: !isAdded, modalData: !isAdded ? this.removeModalData : this.addModalData })

        toggleCartProduct(isAdded ? 'decrease' : 'increase')
        this.handleLocalStorage(isAdded, 'product')
        this.closeAddingModal()

    }



    handleLocalStorage(state, label) {

        if (!state) {
            window['localStorage'].setItem(`${label}-${this.product.id}`, JSON.stringify(this.product))
        } else {
            window['localStorage'].removeItem(`${label}-${this.product.id}`)
        }
    }



    closeAddingModal() {
        this.setState({ isOpenModal: false })


    }

    render() {
        const { name, imgUrl, price, sku, color } = this.product
        const {header, text, actions} = this.state.modalData
        return (
            <>
                {this.state.isOpenModal && <Modal

                    closeButton={false}
                    header={header}
                    text={text}
                    closeModal={() => this.closeAddingModal()}

                    actions={actions}
                />}
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

                        <button onClick={() => this.openModal()} type="button" className={`${styles['cart']}  ${this.state.isAdded && styles['cart-added']}`}>{this.state.isAdded ? 'Remove' : 'Add to cart'}</button>
                        <button onClick={() => this.handleFavorite()} type="button" className={styles['favorite']}>

                            {this.state.isFavorite ? <MdOutlineFavorite size={28} /> : <MdOutlineFavoriteBorder size={28} />}
                        </button>

                    </div>

                </div>
            </>
        )
    }
}

export default Product

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        imgUrl: PropTypes.string.isRequired,
        sku: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired
    }),
    toggleFavorite: PropTypes.func,
    toggleCartProduct: PropTypes.func
}