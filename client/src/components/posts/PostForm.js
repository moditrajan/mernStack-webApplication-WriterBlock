import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
  const [formData, setFormData] = useState({
    title: "",
    text: ""
  });
  const { title, text } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="post-form">
      <div className="post-form-header bg-primary">
        <h3>Share your creations..</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={e => {
          e.preventDefault();
          addPost(formData);
          setFormData({ ...formData, text: "", title: "" });
        }}
      >
        <textarea
          className="post-form-title"
          cols="30"
          rows="1"
          maxLength="55"
          name="title"
          value={title}
          onChange={e => onChange(e)}
        />
        <textarea
          id=""
          cols="30"
          rows="10"
          placeholder="Type Away"
          name="text"
          value={text}
          onChange={e => onChange(e)}
        />
        <input type="submit" value="Submit" className="btn btn-dark my-1" />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
