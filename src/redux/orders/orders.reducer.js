const INITIAL_STATE = {
  orders: [],
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    case "ADD_ORDER":
      const item = {
        ...action.payload,
        orderId: state.orders.length+1
      }
      return {
        orders: [
          ...state.orders,
          item
        ]
      };

    case "REMOVE_ALL":
      return {
        orders: []
      }

    default:
      return state;
  }
};

export default orderReducer;
