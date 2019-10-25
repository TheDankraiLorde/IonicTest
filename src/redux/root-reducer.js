import {combineReducers} from 'redux';
import orderReducer from './orders/orders.reducer';
import menuReducer from './menu/menu.reducers';
import tableReducer from './table/table.reducers';

export default combineReducers({
    order: orderReducer,
    menu: menuReducer,
    table: tableReducer
});