import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonList, IonItem, IonLabel, IonNote, IonBadge, IonIcon } from '@ionic/react';
import {add} from 'ionicons/icons';
import React from 'react';
import { RouteComponentProps } from 'react-router';

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonList>
        <IonItem>
            <IonLabel>
                <h1>Create Idea</h1>
                <IonNote>Run Idea by Brandy</IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
                <p>5 days</p>
            </IonBadge>
        </IonItem>
        </IonList> 
        <IonFab vertical="bottom" horizontal='end' slot='fixed'>
          <IonFabButton onClick={
            () => props.history.push('/new')}>
              <IonIcon icon={add}/>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
