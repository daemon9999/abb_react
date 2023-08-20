
const initialState = {
    favorites: JSON.parse(window['localStorage'].getItem('favorites')) || []
}


export const favoritesReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            const product = action.payload
            return { favorites: product.isFavorite ? [...state.favorites, product] : state.favorites.filter(f => f.id !== product.id) }
        default:
            return state;
    }
}