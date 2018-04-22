
import { SET_SELECTED } from "../constants/action-types";

const initialState = {
    selectedValue: '1'
};

const rootReducer = (state = initialState, action) => {
    console.log('rootReducer action.payload:'+ JSON.stringify(action.payload));
    switch (action.type) {
      case SET_SELECTED:
        let newData = {selectedValue: action.payload.selectedValue };
        let newState = Object.assign({}, state, newData); 
        console.log('rootReducer newState:'+ JSON.stringify(newState));
        return newState;
      default:
        return state;
    }
};
  
export default rootReducer;