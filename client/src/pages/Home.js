import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  return (
    <div className="cover-container">
      <div className="cover-image"></div>
      <div className="cover-box">
        <div className="cover-welcome">Welcome to</div>
        <div className="cover-title">Brews Bags</div>
        <div className="cover-links">
          <Link to="/standings">Schedule</Link>
          <Link to="/standings">Standings</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/signout">Sign Out</Link>
        </div>
      </div>
    </div>
  )
}
export default Home
