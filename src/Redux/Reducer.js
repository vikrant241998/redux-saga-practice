import { ADD_TO_CART } from "./Constant";

export const cartData = (data=[], action) =>{
    if(action.type === ADD_TO_CART){
        console.log("Reducer called", action);
    return action.data
    }
    else{
        return "no data matched"
    }
}