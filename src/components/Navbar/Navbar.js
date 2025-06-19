import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

// 

export default function Navbar() {
  return (
    <div className="navbar__bg">
      <nav className="navbar contenedor">
        <Link className="navbar__logo" to={"/home"}>
          <Logo />
        </Link>

        <div className="navbar__derecha">
          <Link className="navbar__enlace" to="/home">
            Home
          </Link>
          <Link className="navbar__enlace" to="/profesores">
            Profesores
          </Link>
          <Link className="navbar__enlace" to="/servicios">
            Servicios
          </Link>
          <Link className="navbar__enlace" to="/calendario">
            Calendario
          </Link>

          <Link className="" to={"/login"}>
            <button>Ingresar</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
