const initialState = {
    products: [],
    error: null,
    loading: false
}


export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'FETCH_DATA_REQUEST':
            return {
                ...state,
                loading: true
            }

        case 'FETCH_DATA_FAILURE':
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}