export const addOrders = item => ({
  type: "ADD_ORDER",
  payload: item
});

export const removeAllOrders = () => ({
  type: "REMOVE_ALL"
});

export const setQuantity = (itemQty, id, orderInd) => ({
  type: "SET_QTY",
  payload: {
    itemQty,
    id,
    orderInd
  }
});

export const setStatus = (status, orderInd) => ({
  type: "SET_STATUS",
  payload: {
    status,
    orderInd
  }
});

export const removeItem = (orderId, item) => ({
  type: "REMOVE_ITEM",
  payload: {
    orderId,
    item
  }
});

export const removeOrder = orderId => ({
  type: "REM_ORDER",
  payload: orderId
});
