export const toggleCart = (product) => {
    return {
        type: 'TOGGLE_CART',
        payload: product
    }
}

export const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
}