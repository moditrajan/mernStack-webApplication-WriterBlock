import React from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    status,
    location,
    website,
    social,
    user: { name }
  }
}) => {
  return (
    <div className="profile-top bg-primary p-2">
      <img
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d5?s=200"
        alt=""
        className="round-img"
      />
      <h1 className="large">{name}</h1>
      <p className="lead">{status}</p>
      <p>{location && <span>{location}</span>}</p>
      <div className="icons my-1">
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe fa-2x" />
          </a>
        )}

        {social && social.twitter && (
          <a href={social.twitter} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x" />
          </a>
        )}

        {social && social.facebook && (
          <a href={social.facebook} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x" />
          </a>
        )}
        {social && social.youtube && (
          <a href={social.youtube} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube fa-2x" />
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x" />
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object
};

export default ProfileTop;
