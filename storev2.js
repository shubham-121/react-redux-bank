import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { thunk } from "redux-thunk";
//combiner reducers

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

//create store
const store = createStore(rootReducer, applyMiddleware(thunk));

console.log(store.getState());

export default store;
