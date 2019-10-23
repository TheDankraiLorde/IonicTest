import React,{useState, useEffect} from 'react';
import menuItems from '../assets/menu.json';
import { IonContent, IonList, IonItem, IonItemGroup, IonLabel, IonCheckbox, IonTitle, IonButton, IonInput } from '@ionic/react';

const MenuOrders = () => {
    const [menu, setMenu] = useState(menuItems.menu);
    const [tableNo, setTableNo] = useState(0);
    const handleChange = (id: any) =>{
        const item = menu[id];
        const newArr = menu.map(item => (
            id === item.id ? { ...item, isSelect: !item.isSelect } : item
        ))
        setMenu(newArr);
    }

    useEffect(()=>{
        console.log(menu);
    })
    

    return(
        <IonContent>
            <IonList>
                <IonItem>
                    <IonTitle>Menu</IonTitle>
                </IonItem>
                <IonItemGroup>
                {
                    menu.map((item:any) => (
                        <IonItem key={item.id}>
                            <IonLabel>{item.item}</IonLabel>
                            <IonLabel>Rs {item.price}</IonLabel>
                            <IonCheckbox checked={item.isSelect} onClick={() => {handleChange(item.id)}}/>
                        </IonItem>
                    ))
                }   
                </IonItemGroup>
                <IonItem>
                    <IonTitle>Ordered Items</IonTitle>
                    <IonInput />
                </IonItem>
                <IonItemGroup>
                {
                    menu.filter(item=>(
                        item.isSelect
                    )).map((item:any) => (
                        <IonItem key={item.id}>
                            <IonLabel>{item.item}</IonLabel>
                            <IonLabel>Rs {item.price}</IonLabel>
                        </IonItem>
                    ))
                }   
                <hr />
                <IonTitle>Total: Rs {
                    menu.filter(
                        item=>(item.isSelect)
                    ).reduce(
                        (acc,item) => {
                            return (acc+item.price)
                        },0
                    )
                }</IonTitle>
                <hr />
                <IonButton slot="secondary" onClick={()=>
                { 
                    const itemsOrdered = menu.filter(item => item.isSelect);
                    let arr:any = sessionStorage.getItem("orders");
                    if(arr === null){
                        arr = []
                    }
                    else{
                        arr = JSON.parse(arr);
                    }
                    arr.push(itemsOrdered);
                    sessionStorage.setItem("orders",JSON.stringify(arr));
                    console.log(arr);
                }}>Submit</IonButton>
                </IonItemGroup>
            </IonList>
        </IonContent>
    )
}

export default MenuOrders;