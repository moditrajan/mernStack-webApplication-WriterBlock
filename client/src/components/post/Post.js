import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import PostItem from "../posts/PostItem";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import { getPost } from "../../actions/post";

const Post = ({ getPost, post: { post, loading }, match, auth }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);
  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to="/posts" className="btn">
        {" "}
        Back To Posts
      </Link>
      <PostItem
        post={post}
        showActions={false}
        userName={true}
        postClass={"post-inProfile"}
      />
      {auth.isAuthenticated === false ? (
        <p>Create an account or sig in to leave a comment</p>
      ) : (
        <CommentForm postId={post._id} />
      )}

      <div className="bg-primary p">
        <h3>Comments</h3>
      </div>
      <div className="comments">
        {console.log(post)}
        {post.comments.map(comment => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object
};

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
