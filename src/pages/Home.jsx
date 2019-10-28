import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow
} from "@ionic/react";
import { add, remove } from "ionicons/icons";
import { connect } from "react-redux";
import React from "react";
import { removeAllOrders } from "../redux/orders/orders.actions";
import OrderList from "../components/OrderList";

const Home = ({ history, orders, removeAll }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Order Tracker v1.0</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {orders.length === 0 ? (
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
              <h1>No Orders!</h1>
            </IonRow>
          </IonGrid>
        ) : (
          <OrderList orders={orders} />
        )}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => history.push("/new")}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <IonFab vertical="bottom" horizontal="start" slot="fixed">
          <IonFabButton
            onClick={() => {
              removeAll();
            }}
          >
            <IonIcon icon={remove} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

const mstp = state => ({
  orders: state.order.orders
});

const mdtp = dispatch => ({
  removeAll: () => dispatch(removeAllOrders())
});

export default connect(
  mstp,
  mdtp
)(Home);
