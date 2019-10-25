import React from "react";
import { connect } from "react-redux";
import {
  IonContent,
  IonList,
  IonItem,
  IonItemGroup,
  IonLabel,
  IonTitle,
  IonButton,
  IonInput,
  IonItemDivider
} from "@ionic/react";
import { withRouter } from "react-router-dom";
import { addOrders } from "../redux/orders/orders.actions";
import { selectTableNo } from "../redux/table/table.actions";
import { addToCart } from "../redux/cart/cart.actions";
import menuItems from '../assets/menu.json';
import { resetCart } from "../redux/cart/cart.actions";

const MenuOrders = ({ history, cart, addOrders, selTable, tableNo, resetCart, addItemToCart }) => {
  const menu = menuItems.menu
  const handleSubmit = () => {
    const itemTotal = cart.reduce((acc, item) => (acc+(item.price*item.quantity)),0)
    addOrders({
      items: cart,
      status: "En Route",
      total: itemTotal,
      tableNo: tableNo
    });
    resetCart();
    selTable(1);
    history.goBack();
  };
  console.log(cart);
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
                <IonLabel>Quantity: {item.quantity}</IonLabel>
                <IonLabel>Rs {item.price}</IonLabel>
              </IonItem>
            ))}
          <hr />
          <IonTitle>
            Total: Rs{" "}
            {cart
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
  cart: state.cart.cartItems
});

const mdtp = dispatch => ({
  addOrders: order => dispatch(addOrders(order)),
  selTable: tableID => dispatch(selectTableNo(tableID)),
  addItemToCart: item => dispatch(addToCart(item)),
  resetCart: () => dispatch(resetCart())
});

export default connect(
  mstp,
  mdtp
)(withRouter(MenuOrders));
