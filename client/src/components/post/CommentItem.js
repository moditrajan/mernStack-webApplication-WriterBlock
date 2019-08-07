import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { deleteComment } from "../../actions/post";

const CommentItem = ({
  postId,
  comment: { _id, text, name, user, date },
  auth,
  deleteComment
}) => {
  return (
    <div className="comment bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <h4>{name}</h4>
        </Link>
        <p className="my-1">{text}</p>
        <p>
          {" "}
          <small>
            Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
          </small>
        </p>
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={e => deleteComment(postId, _id)}
            type="button"
            className="btn btn-danger"
          >
            <i className="fas fa-times" />
          </button>
        )}
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
