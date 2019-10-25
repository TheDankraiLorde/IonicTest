import menuData from '../../assets/menu.json';

const INIT_STATE = {
    menuList: menuData.menu
}

const menuReducer = (state=INIT_STATE, action) => {
    switch(action.type){
        case "CHOOSE_ITEM":
            return{
                menuList: state.menuList.map(item => (
                                    action.payload === item.id ? 
                                    { ...item, isSelect: !item.isSelect } 
                                    : item
                                ))
            }

        default:
            return state;
    }
}

export default menuReducer;