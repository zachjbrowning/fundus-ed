import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./reducers";

const initialState = {};
const logger = (store: any) => (next: any) => (action: any) => {
  next(action);
  console.log(action);
}
const devMiddleware = [logger];
const prodMiddleware: any = [];

const constructMiddleware = () => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...devMiddleware));
  } else return applyMiddleware(...prodMiddleware);
}

const store = createStore(
  rootReducer,
  initialState,
  constructMiddleware()
);



export default store;