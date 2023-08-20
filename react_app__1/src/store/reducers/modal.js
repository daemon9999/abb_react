

const initialState = {
    modals: []
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'APPEND_MODAL':
            return {
                ...state,
                modals: [...state.modals, action.payload]
            }

        case 'DELETE_MODAL':
            state.modals.pop()
            return {
                ...state,
                modals: state.modals
            }

        case 'DELETE_ALL_MODALS':
            return {
                ...state,
                modals: []
            }

        default:
            return state;
    }
}
