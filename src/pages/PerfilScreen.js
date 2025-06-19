import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function PerfilScreen() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const cerrarSesion = () => {
    navigate("/home");
    logout();
  };
  return (
    <div>
      <Navbar></Navbar>
      <h1>Estoy en perfilScrreen</h1>
      <button onClick={cerrarSesion}>Cerrar Sesion</button>
      <Footer></Footer>
    </div>
  );
}
