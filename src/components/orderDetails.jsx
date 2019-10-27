import React, { useState } from "react";
import {
  IonContent,
  IonList,
  IonListHeader,
  IonItemGroup,
  IonItem,
  IonLabel,
  IonSelectOption,
  IonModal,
  IonButton,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonSelect
} from "@ionic/react";
import { connect } from "react-redux";

const OrderDetail = ({ orderId, orders }) => {
  console.log(orders);
  const [modal, setModal] = useState(true);
  if (!orders[orderId - 1]) {
    return (
      <IonContent>
        <IonModal isOpen={modal}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Unavaiable!</IonTitle>
            </IonToolbar>
          </IonHeader>

          <p align="center">
            We regret to inform you that this item isn't made yet.
          </p>
          <IonButton onClick={() => setModal(false)}>Close Modal</IonButton>
        </IonModal>
      </IonContent>
    );
  } else {
    console.log("Reached!");
    return (
      <IonContent>
        <IonList>
          <IonListHeader color="light">
            <h1>Ordered Items: </h1>
          </IonListHeader>
          <IonItemGroup>
            {orders[orderId - 1].items.map(item => (
              <IonItem key={item.id}>
                <IonLabel>{item.item}</IonLabel>
                <IonLabel>{item.price}</IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
          <IonItem>
            <IonLabel>Status: </IonLabel>
            <IonSelect>
              <IonSelectOption value="En Route">En Route</IonSelectOption>
              <IonSelectOption value="Waiting in Kitchen">
                Waiting in Kitchen
              </IonSelectOption>
              <IonSelectOption value="Delivered">Delivered</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
      </IonContent>
    );
  }
};

const mstp = state => ({
  orders: state.order.orders
});

export default connect(mstp)(OrderDetail);
