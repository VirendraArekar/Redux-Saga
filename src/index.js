import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import App from "./App";
import RootReducer from "./RootReducer";
import RootSaga from "./RootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga);
const rootElement = document.getElementById("root");

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App devName="NguyenNamDuong" />
    </Provider>,
    rootElement
  );
}

render();
store.subscribe(render);
