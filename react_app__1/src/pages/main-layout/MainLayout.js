import React from 'react'
import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'
import Products from 'components/products/Products'


class MainLayout extends React.Component {
  state = {
    favoritesCount: this.getItemsCount().favs,
    cartProductsCount: this.getItemsCount().cartProducts
  }


  getItemsCount() {
    let favs = 0
    let cartProducts = 0
    Object.keys(window['localStorage']).map(key => {
      key.includes('favorite') ? favs += 1 : cartProducts += 1
      return null
    })

    return { favs, cartProducts }
  }



  toggleFavorite(option) {
    this.setState({ favoritesCount: this.state.favoritesCount + (option === 'increase' ? 1 : -1) })
  }

  toggleCartProduct(option) {
    this.setState({ cartProductsCount: this.state.cartProductsCount + (option === 'increase' ? 1 : -1) })
  }
  render() {


    return (
      <>

        <Header favoritesCount={this.state.favoritesCount} 
        cartProductsCount={this.state.cartProductsCount} />
        <Products 
        toggleFavorite={(option) => this.toggleFavorite(option)}
        toggleCartProduct={(option) => this.toggleCartProduct(option)}
        />
        <Footer />
      </>

    )
  }
}




export default MainLayout