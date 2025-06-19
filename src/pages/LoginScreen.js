import React from "react";
import Navbar from "../components/Navbar/Navbar";
import LoginForm from "../components/LoginForm/LoginForm";
import "./LoginScreen.css"; // asegurate de crear este archivo

export default function LoginScreen() {
  return (
    <div className="login-screen">
      <div className="login-screen__imagen" />
      <div className="login-screen__formulario">
        <LoginForm />
      </div>
    </div>
  );
}
