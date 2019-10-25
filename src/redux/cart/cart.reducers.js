import { addItemToCart } from "./cart.utils"

const INIT_STATE = {
    cartItems: []
}

const cartReducer = (state=INIT_STATE, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return {
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case "REMOVE_FROM_CART":
            console.log("TODO://This stream has not been implemented yet.")
            return {
                ...state
            }

        case "RESET_CART":
            return{
                cartItems: []
            }

        default:
            return state
    }
}

export default cartReducer