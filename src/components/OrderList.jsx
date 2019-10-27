import React from "react";
import {
  IonCardContent,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonItemGroup,
  IonLabel,
  IonItem,
  IonNote,
  IonTitle,
  IonBadge,
  IonContent,
  IonCardHeader
} from "@ionic/react";
import { Link } from "react-router-dom";

const OrderList = ({ orders }) => (
  <IonContent>
    {orders.map(order => (
      <IonCard key={order.orderId}>
        <IonCardContent>
          <IonCardHeader>
            <Link to={`/home/${order.orderId}`}>
              <IonCardTitle>
                <h1 className="order-heading">Order #{order.orderId}</h1>
              </IonCardTitle>
            </Link>
            <IonCardSubtitle>
              <h2>Table {order.tableNo}</h2>
            </IonCardSubtitle>
          </IonCardHeader>

          <IonItemGroup>
            {order.items.map(item => (
              <IonItem key={item.id}>
                <IonLabel>
                  <h2>{item.item}</h2>
                  <IonNote>Quantity: {item.quantity}</IonNote>
                </IonLabel>
                <IonTitle slot="end">
                  Rs {item.price} x {item.quantity}
                </IonTitle>
              </IonItem>
            ))}
            <br />
            <IonItem>
              <IonLabel slot="start">
                <h1>Total: Rs {order.total}</h1>
              </IonLabel>
              <IonBadge color="danger" slot="end">
                {order.status}
              </IonBadge>
            </IonItem>
          </IonItemGroup>
        </IonCardContent>
      </IonCard>
    ))}
  </IonContent>
);

export default OrderList;
