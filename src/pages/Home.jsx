import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonItem, IonLabel, IonBadge, IonIcon, IonNote, IonItemGroup, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import {add, remove} from 'ionicons/icons';
import {connect} from 'react-redux';
import React from 'react';
import { removeAllOrders } from '../redux/orders/orders.actions';

const Home = ({history,orders, removeAll}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Order Tracker 69.420</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {
          orders.map((order) => (
            <IonCard key={order.orderId}>
              <IonCardContent>
                <IonCardHeader>
                  <IonCardTitle><h1>Order #{order.orderId}</h1></IonCardTitle>
                  <IonCardSubtitle><h2>Table {order.tableNo}</h2></IonCardSubtitle>
                </IonCardHeader>
                <IonItemGroup>
                {
                  order.items.map( (item) => (
                    <IonItem key={item.id}>
                      <IonLabel>
                        <h2>{item.item}</h2>
                        <IonNote>Quantity: {item.quantity}</IonNote>
                      </IonLabel>
                      <IonTitle slot="end">Rs {item.price} x {item.quantity}</IonTitle>
                    </IonItem>
                  ))
                }
                <br />
                <IonItem>
                <IonLabel slot="start"><h1>Total: Rs {order.total}</h1></IonLabel>
                <IonBadge color="danger" slot="end">{order.status}</IonBadge>
                </IonItem>
                </IonItemGroup>
              </IonCardContent>
            </IonCard>
          ))
        }
        <IonFab vertical="bottom" horizontal='end' slot='fixed'>
          <IonFabButton onClick={
            () => history.push('/new')}>
              <IonIcon icon={add}/>
          </IonFabButton>
        </IonFab>
        <IonFab vertical="bottom" horizontal='start' slot='fixed'>
          <IonFabButton onClick={
            () => {
              removeAll();
            }
          }>
              <IonIcon icon={remove}/>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

const mstp = (state) => ({
  orders: state.order.orders
})

const mdtp = (dispatch) => ({
  removeAll: () => dispatch(removeAllOrders())
}) 

export default connect(mstp,mdtp)(Home);
