import ProductsList from 'components/products-list/ProductsList'
import { useProducts } from 'context/ContextProvider'
import React from 'react'

const Cart = () => {
  const {cartProducts} = useProducts()


  return (
    <>
    
      <ProductsList
        itemList={cartProducts}
      />
    </>
  )
}

export default Cart
