const PRODUCTS_URL = '/products.json'
//FOR CHECKING ERROR YOU CAN USE DIFFERENT URL FOR EXAMPLE: const PRODUCTS_URL = '/cart.json'
export const setProducts = (newProducts) => {
    return {
        type: 'SET_PRODUCTS',
        payload: newProducts
    }
}

export const fetchDataRequest = () => {
    return {
        type: 'FETCH_DATA_REQUEST'
    }
}

export const fetchDataFailure = () => {
    return {
        type: 'FETCH_DATA_REQUEST'
    }
}

export const fetchData = () => {
    return async (dispatch) => {
        dispatch({
            type: 'FETCH_DATA_REQUEST'
        })
        try {
            const res = await fetch(PRODUCTS_URL)
            const data = await res.json()
            dispatch({
                type: 'FETCH_DATA_SUCCESS',
                payload: data
            })
        } catch {
            dispatch({
                type: 'FETCH_DATA_FAILURE'
            })
        }
    }
}