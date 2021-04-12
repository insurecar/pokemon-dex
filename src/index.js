import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { mainReducer } from "./redux/reducer";

const rootElement = document.querySelector("#root");

const reducer = combineReducers({
  mainReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
