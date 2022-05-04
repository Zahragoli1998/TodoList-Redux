import { createStore } from "redux";
import rootReducer from "./list/ListReducer";


const Store = createStore(rootReducer)

export default Store