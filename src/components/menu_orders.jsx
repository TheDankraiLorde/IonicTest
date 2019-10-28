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
  IonItemDivider,
  IonListHeader,
  IonNote,
  IonCard,
  IonCardContent,
  IonCardHeader
} from "@ionic/react";
import { withRouter } from "react-router-dom";
import { addOrders } from "../redux/orders/orders.actions";
import { selectTableNo } from "../redux/table/table.actions";
import { addToCart } from "../redux/cart/cart.actions";
import menuItems from "../assets/menu.json";
import { resetCart } from "../redux/cart/cart.actions";

const MenuOrders = ({
  history,
  cart,
  addOrders,
  selTable,
  tableNo,
  resetCart,
  addItemToCart
}) => {
  const menu = menuItems.menu;
  const handleSubmit = () => {
    const itemTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
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
  return (
    <IonContent>
      <IonList>
        <IonListHeader color="light">
          <h2>Menu</h2>
        </IonListHeader>
        <IonItemGroup>
          {menu.map(item => (
            <IonCard key={item.id}>
              <IonCardHeader>
                <IonLabel style={{fontSize:"19px"}}>{item.item}</IonLabel>
              </IonCardHeader>
              <IonCardContent>
                <IonItem>
                  <IonLabel slot="start">Rs {item.price}</IonLabel>
                  <IonButton
                      onClick={() => {
                        addItemToCart(item);
                      }}
                  >
                  Add
                  </IonButton>
                </IonItem>
              </IonCardContent>
              
            </IonCard>
          ))}
        </IonItemGroup>
        <IonItemDivider />
        <IonItem color="light">
          <IonTitle slot="start">Please select Table: </IonTitle>
          <IonInput
            type="number"
            slot="end"
            value={tableNo}
            min={1}
            max={10}
            onInput={event => selTable(event.target.value)}
          ></IonInput>
        </IonItem>
        <IonItemDivider />
        <IonListHeader color="light">
          <h2>Ordered Items</h2>
        </IonListHeader>
        <IonItemGroup>
          {cart.map(item => (
            <IonCard key={item.id}>
              <IonCardHeader>
                <IonLabel style={{fontSize:"19px"}}>
                  {item.item}
                </IonLabel>
              </IonCardHeader>
              <IonCardContent>
                <IonItem>
                  <IonLabel slot="start">Quantity: {item.quantity}</IonLabel>
                  <IonLabel style={{textAlign:"right"}}>Rs {item.price} each</IonLabel>
                </IonItem>
                <IonItem style={{fontSize: "19px"}}>
                  <IonLabel slot="start">
                    Total Price:
                  </IonLabel>
                  <IonLabel style={{textAlign:"right"}}>
                    Rs {item.quantity * item.price}
                  </IonLabel>
                </IonItem>
              </IonCardContent>
            </IonCard>
          ))}
          <IonItem>
            <IonLabel style={{fontSize: "19px", fontWeight: "350"}}>
              <h2>
              Total: Rs{" "}
              {cart.reduce((acc, item) => {
                return acc + item.price * item.quantity;
              }, 0)}
              </h2>
            </IonLabel>
          </IonItem>
        </IonItemGroup>
      </IonList>
      <IonItem>
        <IonButton
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </IonButton>
      </IonItem>
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
