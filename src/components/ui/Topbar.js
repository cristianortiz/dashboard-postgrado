import React from "react";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="toggle"></div>

      <div className="search">
        <label htmlFor="search">
          <input id="search" name="search" type="text" placeholder="Search" />
          <i className="fa fa-search" aria-hidden="true"></i>
        </label>
      </div>
      <div className="user">
        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default Topbar;
