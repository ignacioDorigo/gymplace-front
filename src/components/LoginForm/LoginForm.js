import React from "react";
import "./LoginForm.css";
import { useFormik } from "formik";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";

export default function LoginForm() {
  const estadoInicial = { email: "", password: "" };

  const formik = useFormik({
    initialValues: estadoInicial,
    onSubmit: async (formulario) => {
      console.log(formulario);
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <Link to={"/home"}>
        <img src="/logoNegro.png" className="form__logo" alt="logo" />
      </Link>

      <h1 className="form__titulo">Bienvenido de vuelta</h1>
      <p className="form__subtitulo">
        Inicia sesión para continuar con tu entrenamiento
      </p>

      <div className="form__campos">
        <div className="form__campo">
          <div className="form__input-wrapper">
            <MdOutlineEmail className="svg__input" />
            <input
              id="email"
              className="form__input"
              placeholder="Email"
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
        </div>

        <div className="form__campo">
          <div className="form__input-wrapper">
            <MdOutlineLock className="svg__input" />
            <input
              id="password"
              className="form__input"
              placeholder="Password"
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
        </div>
      </div>

      <button className="form__button" type="submit">
        Ingresar
      </button>
    </form>
  );
}
