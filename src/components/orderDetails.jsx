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
  IonCard,
  IonCardHeader,
  IonCardContent,
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
      <IonContent fullscreen={true}>
        <IonList>
          <IonListHeader color="light">
            <h1>Ordered Items: </h1>
          </IonListHeader>
          <IonItemGroup>
            {orders[orderId - 1].items.map((item) => (
              <IonCard key={item.id}>
                <IonCard>
                  <IonCardHeader>
                    <IonTitle>{item.item}</IonTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonItemGroup>
                      <IonItem>
                        <IonLabel>
                          Price per Item:
                        </IonLabel>
                        <IonLabel style={{alignText: "right"}}>
                          Rs {item.price}
                        </IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonLabel>Qty:</IonLabel>
                        <IonInput type="number" min="1" onInput={(event) => {
                          setQty(parseInt(event.target.value),item.id,orderId-1);
                        }} style={{textAlign: "center"}} value={item.quantity} placeholder="Quantity"/>
                      </IonItem>
                      <IonItem>
                        <IonLabel>Total Price: </IonLabel>
                        <IonLabel>Rs {item.price * item.quantity}</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonButton  slot="end" onClick={()=>{
                          remItem(orderId-1,item)
                        }}>
                        Remove Item
                        </IonButton>
                      </IonItem>
                    </IonItemGroup>
                  </IonCardContent>
                </IonCard>
              </IonCard>
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
          <IonItem style={{fontWeight:"bold"}}>
            <IonLabel slot="start"><h1>Total:</h1></IonLabel>
            <IonLabel style={{textAlign: "right"}}><h1>Rs {orders[orderId - 1].total}</h1></IonLabel>
          </IonItem>
          <IonItem>
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
