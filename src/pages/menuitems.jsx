import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton} from '@ionic/react';
import '../css/menuitem.css';
import MenuOrders from '../components/menu_orders';

const Random = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home"/>
                    </IonButtons>
                    <IonTitle>New Item</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <MenuOrders/>
            </IonContent>
        </IonPage>
    )
} 


export default Random;