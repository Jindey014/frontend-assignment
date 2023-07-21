
const cart = []


export const handleCart = (state = cart, action) => {
    const product = action.payload
    switch (action.type) {
        case "ADDTOCART":
            const exist = state.find((e) => e.id === product.id)
            if (exist) {
                return state.map((e) => {
                    e.id === product.id ? { ...e, qty: e.qty + 1 } : e
                })
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }


        case "DELETEFROMCART":
            const exist1 = state.find((e) => e.id === product.id)
            if (exist1.qty === 1) {
                return state.filter((e) => e.id !== product.id)
            } else {
                return state.map((e) => {
                    e.id === product.id ? { ...e, qty: qty - 1 } : e
                })
            }
        default:
            return state

    }

}