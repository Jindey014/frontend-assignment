export const addCart = (product) => {
    return {
        type: 'ADDTOCART',
        payload: product
    }
}

export const deleteCart = (product) => {
    return {
        type: 'DELETEFROMCART',
        payload: product
    }
}