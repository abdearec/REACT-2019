import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        style={{ width: "50px" }}
        alt=""
      />
      <h2>{login}</h2>
      <Link className="btn  btn-dark btn-sm my-1" to={`/user/${login}`}>
        more
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};
export default UserItem;
