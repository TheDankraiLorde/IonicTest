import { addItemToCart } from "./cart.utils"

const INIT_STATE = {
    cart: []
}

const cartReducer = (state=INIT_STATE, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return {
                cart : addItemToCart(state.cart, action.payload)
            }

        case "REMOVE_FROM_CART":
            console.log("TODO://This stream has not been implemented yet.")
            return {
                ...state
            }

        case "RESET_CART":
            return{
                cart: []
            }

        default:
            return state
    }
}

export default cartReducer