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
    <div class="profile bg-light">
      <img
        src="https://www.gravatar.com/avatar/205e460b479e2e548aec07710c08d50?s=200"
        alt=""
        class="round-img"
      />
      <div>
        <h2>{name}</h2>
        <p>{status}</p>
        <p>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} class="btn btn-primary">
          View Profile
        </Link>
      </div>

      <ul>
        {favouriteWorks.slice(0, 4).map((skill, index) => (
          <li key={index} className="text-primary">
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
