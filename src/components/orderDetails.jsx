import React from "react";
import {
  IonContent,
  IonList,
  IonListHeader,
  IonItemGroup,
  IonItem,
  IonLabel,
  IonSelectOption,
  IonButton,
  IonTitle,
  IonSelect,
  IonGrid,
  IonRow,
  IonInput,
  IonItemDivider,
} from "@ionic/react";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import { setQuantity, setStatus, removeItem, removeAllOrders } from "../redux/orders/orders.actions";

const OrderDetail = ({ orderId, orders, setQty, setStat, remItem, history, removeAll }) => {
  if (!orders[orderId - 1] || orders.length === 0) {
    return (
      <IonContent>
        <IonGrid style={{ height: "100%" }}>
            <IonRow
              style={{
                height: "100%",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                color: "grey"
              }}
            >
              <h1>Order details are empty.</h1>
            </IonRow>
          </IonGrid>
      </IonContent>
    );
  } else {
    return (
      <IonContent>
        <IonList>
          <IonListHeader color="light">
            <h1>Ordered Items: </h1>
          </IonListHeader>
          <IonItemGroup>
            {orders[orderId - 1].items.map((item,ind) => (
              <IonItem key={item.id} style={{textAlign: "center"}} >
                <IonLabel>{ind+1}</IonLabel>
                <IonLabel>{item.item}</IonLabel>
                <IonLabel>{item.price}</IonLabel>
                <IonItem>
                    <IonLabel>Quantity: </IonLabel>
                    <IonInput type="number" min="1" onInput={(event) => {
                      console.log(event.target.value);
                      setQty(parseInt(event.target.value),item.id,orderId-1);
                    }} style={{textAlign: "center"}} value={item.quantity}/>
                </IonItem>
                <IonButton onClick={()=>{
                  remItem(orderId-1,item)
                }}>Remove Item</IonButton>
              </IonItem>
            ))}
          </IonItemGroup>
          <IonItemDivider/>
          <IonItem>
            <IonLabel>Status: </IonLabel>
            <IonSelect onIonChange={(event)=>setStat(event.target.value, orderId-1)}>
              <IonSelectOption value="En Route" selected>En Route</IonSelectOption>
              <IonSelectOption value="Waiting in Kitchen">
                Waiting in Kitchen
              </IonSelectOption>
              <IonSelectOption value="Delivered">Delivered</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItemDivider/>
          <IonItem>
            <IonTitle style={{textAlign: "center"}}>Total: </IonTitle>
            <IonTitle style={{textAlign: "center"}}>Rs {orders[orderId - 1].total}</IonTitle>
            <IonButton slot="end" color="danger" onClick={()=>{
              history.goBack();
              removeAll();
            }}>Delete Order</IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    );
  }
};

const mstp = state => ({
  orders: state.order.orders
});

const mdtp = dispatch => ({
  setQty: (itemQty, id, orderInd) => dispatch(setQuantity(itemQty,id, orderInd)),
  setStat: (status, orderInd) => dispatch(setStatus(status, orderInd)),
  remItem: (orderId, item) => dispatch(removeItem(orderId, item)),
  removeAll: () => dispatch(removeAllOrders()),
});

export default connect(mstp,mdtp)(withRouter(OrderDetail));
