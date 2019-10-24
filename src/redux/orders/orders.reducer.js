
const INITIAL_STATE = {
    orders: []
}

const orderReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case "ADD_ORDER":
            return {
                orders : [...state.orders, action.payload]
            }

        default:
            return state;
    }
}

export default orderReducer;