import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

const PostItem = ({
  auth,
  post: { _id, text, title, name, user, like, comments, date },
  addLike,
  removeLike,
  deletePost,
  postClass,
  userName,
  showActions
}) => {
  return (
    <div className={`${postClass} bg-white my-1 p-1`}>
      {userName && (
        <div>
          <Link to={`/profile/${user}`}>
            <h4>{name}</h4>
          </Link>
        </div>
      )}

      <div>
        <h3>{title}</h3>
        <p className="my-1">{text}</p>
        <small>
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </small>

        {showActions && (
          <Fragment>
            <button onClick={e => addLike(_id)} className="btn" type="button">
              <i className="fas fa-thumbs-up" />
              {like.length > 0 && <span>{like.length}</span>}
            </button>
            <button
              className="btn"
              type="button"
              onClick={e => removeLike(_id)}
            >
              <i className="fas fa-thumbs-down" />
            </button>

            <Link to={`/posts/${_id}`} className="btn btn-primary">
              Discussion
              {comments.length > 0 && <span>{comments.length}</span>}
            </Link>

            {auth.user === null ? (
              <Fragment> </Fragment>
            ) : (
              <Fragment>
                {!auth.loading && user === auth.user._id && (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={e => deletePost(_id)}
                  >
                    <i className="fas fa-times" />
                  </button>
                )}
              </Fragment>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(PostItem);
