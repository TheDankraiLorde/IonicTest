import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton
} from "@ionic/react";
import OrderDetail from "../components/orderDetails";

const orderPage = ({ match }) => {
  const { orderId } = match.params;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Details for order #{orderId}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <OrderDetail orderId={orderId} />
      </IonContent>
    </IonPage>
  );
};

export default orderPage;
