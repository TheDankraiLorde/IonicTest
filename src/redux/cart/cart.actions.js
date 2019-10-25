export const addToCart = (item) => ({
    type: "ADD_TO_CART",
    payload: item
})

export const resetCart = () => ({
    type:"RESET_CART"
})