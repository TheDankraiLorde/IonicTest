const INITIAL_STATE = {
  orders: [],
  orderId: 0
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ORDER":
      return {
        orders: [
          ...state.orders,
          {
            ...action.payload,
            orderId: state.orderId + 1
          }
        ]
      };

    default:
      return state;
  }
};

export default orderReducer;
