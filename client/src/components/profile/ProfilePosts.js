import React, { Fragment } from "react";
import PropTypes from "prop-types";
import PostItem from "../posts/PostItem";

const ProfilePosts = ({ posts, name }) => {
  //console.log(title);
  console.log(posts);
  //console.log(text);

  return (
    <Fragment>
      {/* <h1 className="large text-primary">Posts</h1> */}
      <p className="lead">View Posts by {name}</p>

      <div className="posts">
        {posts.map(post => (
          <PostItem
            key={post._id}
            post={post}
            userName={false}
            postClass={"post-inProfile"}
          />
        ))}
      </div>
    </Fragment>
  );
};

ProfilePosts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default ProfilePosts;
//: { title, text }
