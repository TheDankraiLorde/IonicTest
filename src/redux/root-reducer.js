import {combineReducers} from 'redux';
import orderReducer from './orders/orders.reducer';
import menuReducer from './menu/menu.reducers';

export default combineReducers({
    order: orderReducer,
    menu: menuReducer
});