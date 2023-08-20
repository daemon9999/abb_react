export const toggleCart = (product) => {
    return {
        type: 'TOGGLE_CART',
        payload: product
    }
}