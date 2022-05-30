const initialState = {};
const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_POSTS":
      console.log("6.PostReducer---RECEIVE_POSTS");
      console.log("\t\t\tstate: ", state);
      console.log("\t\t\taction: ", action);
      return { ...state, posts: action.posts };
    case "RECEIVE_POST":
      console.log("6.PostReducer---RECEIVE_POST");
      console.log("\t\t\tstate: ", state);
      console.log("\t\t\taction: ", action);
      return { ...state, post: action.post };
    default:
      console.log("2.PostReducer---default");
      console.log("\t\t\tstate: ", state);
      console.log("\t\t\taction: ", action);
      return state;
  }
};
export default PostReducer;
