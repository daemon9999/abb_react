import { combineReducers } from "redux"
import {modalReducer} from "./modal"
import { cartReducer } from "./cartProducts"
import { favoritesReducer } from "./favorites"
import { productsReducer } from "./products"
const rootReducer = combineReducers({
    modal: modalReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
    products: productsReducer
})
export default rootReducer