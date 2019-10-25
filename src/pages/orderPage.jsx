import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton} from '@ionic/react';

const orderPage = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home"/>
                    </IonButtons>
                    <IonTitle>Order Detail</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            </IonContent>
        </IonPage>
    )
} 

export default orderPage;