import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">Animekuy</div>
        <ul className="link-list">
          <li className="link-item">
            <a href="#">Home</a>
          </li>
          <li className="link-item">
            <a href="#">Genres</a>
          </li>
          <li className="link-item">
            <a href="#">List</a>
          </li>
          <li className="link-item">
            <a href="#">Release Date</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
