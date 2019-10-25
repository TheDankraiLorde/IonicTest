export const addOrders = (item) => ({
    type: 'ADD_ORDER',
    payload: item
})

export const removeAllOrders = () => ({
    type: "REMOVE_ALL",
})