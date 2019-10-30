const INITIAL_STATE = {
  orders: [],
  currentOrderNo: 0
};

const orderReducer = (state = INITIAL_STATE, action) => {
  let newItems = "";
  let newOrders = "";
  switch (action.type) {
    case "ADD_ORDER":
      const item = {
        ...action.payload,
        orderId: state.currentOrderNo + 1
      };
      return {
        orders: [...state.orders, item],
        currentOrderNo: state.currentOrderNo + 1
      };

    case "REMOVE_ALL":
      return {
        orders: [],
        currentOrderNo: 0
      };

    case "SET_QTY":
      newItems = state.orders[action.payload.orderInd].items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.itemQty }
          : item
      );
      newOrders = state.orders.map(order =>
        order.orderId === action.payload.orderInd + 1
          ? {
              ...order,
              items: newItems,
              total: newItems.reduce((a, i) => a + i.price * i.quantity, 0)
            }
          : order
      );
      return {
        ...state,
        orders: newOrders
      };

    case "SET_STATUS":
      return {
        ...state,
        orders: state.orders.map(order =>
          order.orderId === action.payload.orderInd + 1
            ? { ...order, status: action.payload.status }
            : order
        )
      };

    case "REMOVE_ITEM":
      newItems = state.orders[action.payload.orderId].items.filter(
        item => item !== action.payload.item
      );
      newOrders = state.orders.map(order =>
        order.orderId === action.payload.orderId + 1
          ? {
              ...order,
              items: newItems,
              total: newItems.reduce((a, i) => a + i.price * i.quantity, 0)
            }
          : order
      );
      return {
        ...state,
        orders: newOrders
      };

    case "REM_ORDER":
      newOrders = state.orders.filter(order => {
        console.log(order.orderId, action.payload);
        return order.orderId !== action.payload;
      });
      return {
        ...state,
        orders: newOrders
      };

    default:
      return state;
  }
};

export default orderReducer;
