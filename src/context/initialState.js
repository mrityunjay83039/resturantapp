import {fetchCart, fetchUser} from '../utils/fetchLocalStorageData';

const cartInfo = fetchCart();
const userInfo = fetchUser();

export const initialState = {
    user:userInfo,
    foodItems:null,
    cartItems:cartInfo,
    cartShow:false,
}