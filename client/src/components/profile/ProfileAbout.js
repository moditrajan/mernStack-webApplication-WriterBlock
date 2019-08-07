import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    favouriteWorks,
    user: { name }
  }
}) => {
  return (
    <Fragment>
      <div className="profile-about bg-light p-2">
        {bio && (
          <Fragment>
            <h2 className="text-dark">{name.trim().split(" ")[0]}s Bio</h2>
            <p>{bio}</p>
            <div className="line" />
          </Fragment>
        )}

        <h2 className="text-dark">Fav Works</h2>
        <div className="fav-works">
          {favouriteWorks.map((work, index) => (
            <div key={index} className="p-1">
              <i className="fas facheck" /> {work}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
