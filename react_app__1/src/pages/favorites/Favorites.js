import ProductsList from 'components/products-list/ProductsList'
import { useProducts } from 'context/ContextProvider'
import React from 'react'

const Favorites = () => {
  const {favorites} = useProducts()
  return (
    <>
    
      <ProductsList
        itemList={favorites}
      />
    </>
  )
}

export default Favorites
