import React from "react";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <a href="/">
            <span className="icon">
              <i className="fa fa-university" aria-hidden="true"></i>
            </span>
            <span className="title">
              <h2>VRIP-DIP</h2>
            </span>
          </a>
        </li>
        <li>
          <a href="/dashboard">
            <span className="icon">
              <i className="fa fa-th" aria-hidden="true"></i>
            </span>
            <span className="title">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/programas">
            <span className="icon">
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </span>
            <span className="title">Programas</span>
          </a>
        </li>
        <li>
          <a href="/alumnos">
            <span className="icon">
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>
            </span>
            <span className="title">Alumnos</span>
          </a>
        </li>
        <li>
          <a href="/becas">
            <span className="icon">
              <i className="fa fa-usd" aria-hidden="true"></i>
            </span>
            <span className="title">Becas</span>
          </a>
        </li>
        <li>
          <a href="/academicos">
            <span className="icon">
              <i className="fa fa-address-card" aria-hidden="true"></i>
            </span>
            <span className="title">Académicos</span>
          </a>
        </li>
        <li>
          <a href="/usuarios">
            <span className="icon">
              <i className="fa fa-users" aria-hidden="true"></i>
            </span>
            <span className="title">Usuarios</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
