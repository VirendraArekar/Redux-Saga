import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PostAction from "./actions/PostAction";

const App = (props) => {
  const { getPosts, getPost } = props.postAction;

  return (
    <div>
      <h1>{props.devName}</h1>
      {props.post && (
        <div>
          <p>
            <strong>{props.post.title}</strong>
          </p>
          <p>{props.post.body}</p>
        </div>
      )}
      <button onClick={getPosts}>Get Posts</button>
      <hr />
      {props.posts &&
        props.posts.length > 0 &&
        props.posts.map((post, index) => {
          return (
            <p key={index}>
              <span onClick={getPost.bind(this, post.id)}>___{post.id}___</span>{" "}
              {post.title}
            </p>
          );
        })}
    </div>
  );
};

App.propTypes = {
  devName: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) => {
  console.log("0.App---mapDispatchToProps");
  return {
    postAction: bindActionCreators(PostAction, dispatch)
  };
};

const mapStateToProps = (state) => {
  console.log("7.App---mapStateToProps---state:", state);
  return {
    posts: state.PostReducer.posts,
    post: state.PostReducer.post
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
