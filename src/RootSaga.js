import { all } from "redux-saga/effects";
import PostSaga from "./sagas/PostSaga";

export default function* rootSaga() {
  yield all([PostSaga()]);
}
