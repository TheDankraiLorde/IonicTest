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
  IonInput
} from "@ionic/react";
import { withRouter } from "react-router-dom";
import { chooseItems, resetItems } from "../redux/menu/menu.actions";
import { addOrders } from "../redux/orders/orders.actions";
import { selectTableNo } from "../redux/table/table.actions";

const MenuOrders = ({ history, menu, selectItems, addOrders, selTable, tableNo, resetItems }) => {
  const handleSubmit = () => {
    const itemsOrdered = menu.filter(item => item.isSelect);
    const itemTotal = itemsOrdered.reduce((acc,item) => (acc+(item.price)),0);
    addOrders({
      items: itemsOrdered,
      status: "En Route",
      total: itemTotal,
      tableNo: tableNo
    });
    resetItems();
    selTable(1);
    history.goBack();
  };

  return (
    <IonContent>
      <IonList>
        <IonItem>
          <IonTitle>Menu</IonTitle>
        </IonItem>
        <IonItemGroup>
          {menu.map(item => (
            <IonItem key={item.id}>
              <IonLabel>{item.item}</IonLabel>
              <IonLabel>Rs {item.price}</IonLabel>
              <IonCheckbox
                checked={item.isSelect}
                onClick={() => {
                  selectItems(item.id);
                }}
              />
            </IonItem>
          ))}
        <IonItem>
          <IonLabel>Please select Table: </IonLabel>
          <IonInput type="number" value={tableNo} onInput={
            (event) => selTable(event.target.value)
          }></IonInput>
        </IonItem>
        </IonItemGroup>
        <IonItem>
          <IonTitle>Ordered Items</IonTitle>
          <IonInput />
        </IonItem>
        <IonItemGroup>
          {menu
            .filter(item => item.isSelect)
            .map(item => (
              <IonItem key={item.id}>
                <IonLabel>{item.item}</IonLabel>
                <IonLabel>Rs {item.price}</IonLabel>
              </IonItem>
            ))}
          <hr />
          <IonTitle>
            Total: Rs{" "}
            {menu
              .filter(item => item.isSelect)
              .reduce((acc, item) => {
                return acc + item.price;
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
  menu: state.menu.menuList,
  orders: state.order.orders,
  tableNo: state.table.tableNo
});

const mdtp = dispatch => ({
  selectItems: item_id => dispatch(chooseItems(item_id)),
  addOrders: order => dispatch(addOrders(order)),
  selTable: tableID => dispatch(selectTableNo(tableID)),
  resetItems: () => dispatch(resetItems())
});

export default connect(
  mstp,
  mdtp
)(withRouter(MenuOrders));
