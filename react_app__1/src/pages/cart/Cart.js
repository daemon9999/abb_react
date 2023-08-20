import CheckoutForm from 'components/checkout-form/CheckoutForm'
import ProductsList from 'components/products-list/ProductsList'

import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const {cartProducts} = useSelector(state => state.cart)


  return (
    <>
    
      <ProductsList
        itemList={cartProducts}
      />
      {cartProducts.length > 0 && <CheckoutForm/>}
    </>
  )
}
 
export default Cart
