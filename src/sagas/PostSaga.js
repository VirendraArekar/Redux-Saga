import { call, put, takeEvery } from "redux-saga/effects";
import PostAction from "../actions/PostAction";
import { GetPosts, GetPost } from "../services/PostService";

export function* getPosts(action) {
  try {
    console.log("3.PostSaga---getPosts");
    const result = yield call(GetPosts, action.requestModel);
    yield put(PostAction.receivePosts(result));
  } catch (error) {
    console.error("PostSaga---getPosts---error: ", error);
  }
}

export function* getPost(action) {
  try {
    console.log("3.PostSaga---getPost");
    const result = yield call(GetPost, action.requestModel);
    yield put(PostAction.receivePost(result));
  } catch (error) {
    console.error("PostSaga---getPost---error: ", error);
  }
}

export default function* watchGetPostSaga() {
  yield takeEvery("GET_POSTS", getPosts);
  yield takeEvery("GET_POST", getPost);
}
