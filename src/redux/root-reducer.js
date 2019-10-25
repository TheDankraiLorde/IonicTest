import {combineReducers} from 'redux';
import orderReducer from './orders/orders.reducer';
import menuReducer from './menu/menu.reducers';
import tableReducer from './table/table.reducers';
import cartReducer from './cart/cart.reducers';

export default combineReducers({
    order: orderReducer,
    table: tableReducer,
    cart: cartReducer
});