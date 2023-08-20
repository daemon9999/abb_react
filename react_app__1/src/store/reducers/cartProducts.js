const initialState = {
    cartProducts: JSON.parse(window['localStorage'].getItem('products')) || []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_CART':
            const product = action.payload
            return { cartProducts: product.isAdded ? [...state.cartProducts, product] : state.cartProducts.filter(cp => cp.id !== product.id)}
        default:
            return state;
    }
}