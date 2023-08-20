import ProductsList from 'components/products-list/ProductsList'

import React from 'react'
import { useSelector } from 'react-redux'

const Favorites = () => {
  const {favorites} = useSelector(state => state.favorites)
  return (
    <>
    
      <ProductsList
        itemList={favorites}
      />
    </>
  )
}

export default Favorites
