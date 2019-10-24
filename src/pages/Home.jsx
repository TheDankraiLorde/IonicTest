import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonItem, IonLabel, IonBadge, IonIcon, IonNote, IonItemGroup, IonCard, IonCardContent, IonCardHeader } from '@ionic/react';
import {add, remove} from 'ionicons/icons';
import {connect} from 'react-redux';
import React from 'react';

const Home = ({orders}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {
          orders.map((order,id) => (
            <IonCard key={id}>
              <IonCardContent>
                <IonCardHeader color="primary">
                  <h1>Order #{id}</h1>
                </IonCardHeader>
                <IonItemGroup>
                {
                  order.items.map( (item) => (
                    <IonItem key={item.id}>
                      <IonLabel>
                        <h2>{item.item}</h2>
                        <IonNote>Rs {item.price}</IonNote>
                      </IonLabel>
                    </IonItem>
                  ))
                }
                <br />
                <IonBadge color="danger" slot="end">{order.status}</IonBadge>
                </IonItemGroup>
              </IonCardContent>
              
            </IonCard>
          ))
        }
        <IonFab vertical="bottom" horizontal='end' slot='fixed'>
          <IonFabButton onClick={
            () => props.history.push('/new')}>
              <IonIcon icon={add}/>
          </IonFabButton>
        </IonFab>
        <IonFab vertical="bottom" horizontal='start' slot='fixed'>
          <IonFabButton onClick={
            () => {
              
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


export default connect(mstp)(Home);
