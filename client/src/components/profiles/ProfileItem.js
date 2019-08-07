import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileItem = ({
  profile: {
    user: { _id, name },
    location,
    status,
    favouriteWorks
  }
}) => {
  return (
    <div className="profile bg-light">
      <img
        src="https://www.gravatar.com/avatar/205e460b479e2e548aec07710c08d50?s=200"
        alt=""
        className="round-img"
      />
      <div>
        <h2>{name}</h2>
        <p>{status}</p>
        <p>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className="btn btn-primary" key={_id}>
          View Profile
        </Link>
      </div>

      <ul>
        <li> Favourite Works</li>
        {favouriteWorks.slice(0, 4).map((skill, index) => (
          <li key={index} className="text-red">
            <i className="fas fa-check" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
