import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { configureStore } from "@reduxjs/toolkit";
//combiner reducers

// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });

// //create store
// const store = createStore(rootReducer, applyMiddleware(thunk));

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

console.log(store.getState());

export default store;
