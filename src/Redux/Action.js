import { ADD_TO_CART } from "./Constant";
export const Add_to_Cart = (data) =>{
    console.log("Action called", data);
    return {
        type: ADD_TO_CART,
        data: data
    }
}