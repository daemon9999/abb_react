

export const appendModal = (modalData) => {
    return {
        payload: modalData,
        type: 'APPEND_MODAL'
    }
}

export const deleteModal = () => {
    return {
        type: 'DELETE_MODAL'
    }
}

export const deleteAllModals = () => {
    return {
        type: 'DELETE_ALL_MODALS'
    }
}

