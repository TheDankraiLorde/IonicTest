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

const OrderList = ({ orders }) => {
  return (
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
              <IonItemGroup key={item.id}>
                <IonItem>
                  <IonLabel>
                    <h2 stlye={{fontWeight: "300"}}>{item.item}</h2>
                  <IonNote>Quantity: {item.quantity}</IonNote>
                  </IonLabel>
                </IonItem>
                <IonItem style={{fontWeight: "350"}}>
                  <IonLabel>Price: </IonLabel>
                  <IonLabel slot="end">
                    Rs {item.price} x {item.quantity}
                  </IonLabel>
                </IonItem>
              </IonItemGroup>
            ))}
            <br />
            <IonItem>
              <IonLabel>
                <h1>Total:</h1>
              </IonLabel>
              <IonLabel>
                <h1>Rs {order.total}</h1>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonBadge color="primary" slot="end">
                <h3>{order.status}</h3>
              </IonBadge>
            </IonItem>
          </IonItemGroup>
        </IonCardContent>
      </IonCard>
    ))}
  </IonContent>
)};

export default OrderList;
