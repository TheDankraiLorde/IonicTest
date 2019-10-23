import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton} from '@ionic/react';
import menuItems from '../assets/menu.json';
import '../css/menuitem.css';
import MenuOrders from '../components/menu_orders';

class Random extends React.Component<any,any> {   
  
    constructor(props: any){
        super(props);
        this.state = {
            menu: menuItems.menu,
            orders: []
        }
    }

    render(){
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
}

export default Random;