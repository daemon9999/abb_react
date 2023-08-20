import ProductsList from 'components/products-list/ProductsList'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from 'store/actions/products'

const Home = () => {
    const { products } = useSelector(state => state.products)
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(fetchData())
    }, [])



    return (
        <>
            <ProductsList
                itemList={products}
            />
        </>
    )
}

export default Home
