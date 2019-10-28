const INITIAL_STATE = {
  orders: [],
};

const orderReducer = (state = INITIAL_STATE, action) => {
  let newItems=""  
  let newOrders = ""
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

    case "SET_QTY": 
      newItems =  state.orders[action.payload.orderInd].items.map(item => (
        (item.id === action.payload.id) ? (
            {...item, quantity: action.payload.itemQty}
        ): item
      ))
      newOrders = state.orders.map(order => (
        (order.orderId === (action.payload.orderInd + 1))
        ? {
            ...order,
            items: newItems,
            total: newItems.reduce((a,i) => a + (i.price * i.quantity),0)
          }
        : order
      ))
      return {
        orders: newOrders,
      };

    case "SET_STATUS":
      return {
        orders: state.orders.map(order => (
          (order.orderId === action.payload.orderInd +1) 
          ? {...order, status: action.payload.status} 
          : order
        ))
      }

    case "REMOVE_ITEM":
      newItems = state.orders[action.payload.orderId].items.filter(item => item !== action.payload.item);
      newOrders = state.orders.map(order => (order.orderId === action.payload.orderId +1 ? {...order,items: newItems, total: newItems.reduce((a,i) => a + (i.price * i.quantity),0)}:order))
      return {
        orders: newOrders
      }

    default:
      return state;
  }
};

export default orderReducer;
