import { createContext, useContext, useState } from "react"


const SiteContext = createContext()


export const useProducts = () => useContext(SiteContext)

const ContextProvider = ({ children }) => {
    const favs = JSON.parse(window['localStorage'].getItem('favorites')) || []
    const cart = JSON.parse(window['localStorage'].getItem('products')) || []
    
    const [favorites, setFavorites] = useState(favs)
    const [cartProducts, setCartProducts] = useState(cart)
    const [products, setProducts] = useState([])
    const [modals, setModals] = useState([])
    const [loadingProducts, setLoadingProducts] = useState(true)

    const toggleFavorite = ( product) => {
        if (product.isFavorite){
            setFavorites(prev => [...prev, product])
        } else{
            setFavorites(prev => prev.filter(p => p.id !== product.id))
        }
        const newProducts = products.map(item => item.id === product.id ? product : item)
        setProducts(newProducts)
    }

    const toggleCartProduct = (product) => {
        if (product.isAdded){
            setCartProducts(prev => [...prev, product])
        } else {
            setCartProducts(prev => prev.filter(p => p.id !== product.id))
        } 
        const newProducts = products.map(item => item.id === product.id ? product : item)
        setProducts(newProducts)
    }

    const closeModal = () => setModals(prev => prev.slice(0, prev.length - 1))
    const data = {
        toggleFavorite,
        toggleCartProduct,
        favorites,
        cartProducts,
        products,
        setProducts,
        setCartProducts,
        modals,
        closeModal: closeModal,
        appendModal: (modal) => setModals(prev => [...prev, modal]),
        loadingProducts,
        setLoadingProducts
    }
    return (
        <SiteContext.Provider value={data} >
            {children}

        </SiteContext.Provider>
    )

}

export default ContextProvider