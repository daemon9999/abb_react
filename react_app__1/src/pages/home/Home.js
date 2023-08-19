import ProductsList from 'components/products-list/ProductsList'
import { useProducts } from 'context/ContextProvider'
import React, { useEffect } from 'react'

const Home = () => {
    const { products, setLoadingProducts, setProducts } = useProducts()



    useEffect(() => {
        const fetchProducts = () => {

            fetch('/products.json')
                .then(res => res.json())
                .then(data => {
                    setLoadingProducts(false)
                    setProducts(data)

                })
                .catch(err => {
                    throw new Error(err)
                })
        }
        setTimeout(fetchProducts, 1000)
        return () => {
            clearTimeout(fetchProducts, 1000)
        }
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
