import React from "react";
import styles from "./Products.module.scss"
import Product from "components/product/Product";
import PropTypes from "prop-types"

class Products extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
        this.fetchProducts()
    }


    fetchProducts() {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
             
                this.setState({products: data})
            })
            .catch(err => {
                throw new Error(err)
            })
    }

    render() {
        const {toggleFavorite, toggleCartProduct} = this.props
        const {products} = this.state
        return (
            <main className={styles.products}>

                <div className={`container ${styles['products__container']}`}>
                    {products.length > 0 && products.map(product => (
                        <Product 
                        toggleCartProduct={(option) => toggleCartProduct(option)}
                        toggleFavorite={(option) => toggleFavorite(option)}  
                        product={product} key={product.id}/>
                    ))}
  
                </div>
            </main>
        )
    }
}

export default Products

Products.propTypes = {
    toggleFavorite: PropTypes.func,
    toggleCartProduct: PropTypes.func
}