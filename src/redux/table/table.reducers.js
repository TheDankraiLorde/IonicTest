const INIT_STATE = {
    tableNo: 1
}

const tableReducer = (state=INIT_STATE, action) => {
    switch(action.type){
        case "SET_TABLE_NO": 
        return {
            ...state,
            tableNo: action.payload
        }

        default:
            return state;
    }
}

export default tableReducer;