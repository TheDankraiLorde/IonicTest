import React from "react";
import { connect } from "react-redux";
import {
  IonContent,
  IonList,
  IonItem,
  IonItemGroup,
  IonLabel,
  IonCheckbox,
  IonTitle,
  IonButton,
  IonInput,
  IonItemDivider
} from "@ionic/react";
import { withRouter } from "react-router-dom";
import { addOrders } from "../redux/orders/orders.actions";
import { selectTableNo } from "../redux/table/table.actions";
import { addItemToCart } from "../redux/cart/cart.utils";
import menu from '../assets/menu.json';
import { resetCart } from "../redux/cart/cart.actions";

const MenuOrders = ({ history, cart, addOrders, selTable, tableNo, resetItems, resetCart }) => {
  
  const handleSubmit = () => {
    const itemTotal = cart.reduce((acc, item) => (acc+(item.price*item.quantity)),0)
    addOrders({
      items: cart,
      status: "En Route",
      total: itemTotal,
      tableNo: tableNo
    });
    resetItems();
    resetCart();
    selTable(1);
    history.goBack();
  };

  return (
    <IonContent>
      <IonList>
        <IonItem color="light">
          <IonTitle>Menu</IonTitle>
        </IonItem>
        <IonItemGroup>
          {menu.map(item => (
            <IonItem key={item.id} onClick={() => {addItemToCart(item)}}>
              <IonLabel>{item.item}</IonLabel>
              <IonLabel>Rs {item.price}</IonLabel>
            </IonItem>
          ))}
        </IonItemGroup>
        <IonItemDivider/>
        <IonItem color="light">
          <IonTitle slot="start">Please select Table: </IonTitle>
          <IonInput type="number" slot="end" value={tableNo} onInput={
            (event) => selTable(event.target.value)
          }></IonInput>
        </IonItem>
        <IonItemDivider/>
        <IonItem color="light">
          <IonTitle>Ordered Items</IonTitle>
        </IonItem>
        <IonItemGroup>
          {cart.map(item => (
              <IonItem key={item.id}>
                <IonLabel>{item.item}</IonLabel>
                <IonLabel>{item.quantity}</IonLabel>
                <IonLabel>Rs {item.price}</IonLabel>
              </IonItem>
            ))}
          <hr />
          <IonTitle>
            Total: Rs{" "}
            {menu
              .filter(item => item.isSelect)
              .reduce((acc, item) => {
                return acc + (item.price*item.quantity);
              }, 0)}
          </IonTitle>
          <hr />
        </IonItemGroup>
      </IonList>
      <IonButton
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </IonButton>
    </IonContent>
  );
};

const mstp = state => ({
  orders: state.order.orders,
  tableNo: state.table.tableNo,
  cart: state.cart.cart
});

const mdtp = dispatch => ({
  addOrders: order => dispatch(addOrders(order)),
  selTable: tableID => dispatch(selectTableNo(tableID)),
  resetItems: () => dispatch(resetItems()),
  addItemToCart: item => dispatch(addItemToCart(item)),
  resetCart: () => dispatch(resetCart())
});

export default connect(
  mstp,
  mdtp
)(withRouter(MenuOrders));
