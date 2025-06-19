import React from "react";
import "./LoginForm.css";
import { useFormik } from "formik";
import * as Yup from "yup"; // ⬅️ importación nueva
import { Link } from "react-router-dom";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";

export default function LoginForm() {
  const estadoInicial = { email: "", password: "" };

  // ✅ Esquema de validación
  const validacion = Yup.object({
    email: Yup.string()
      .email("Ingresá un email válido")
      .required("El email es obligatorio"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("La contraseña es obligatoria"),
  });

  const formik = useFormik({
    initialValues: estadoInicial,
    validationSchema: validacion, // ⬅️ se pasa aquí
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
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <div className="form__error">{formik.errors.email}</div>
          )}
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
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
          {formik.touched.password && formik.errors.password && (
            <div className="form__error">{formik.errors.password}</div>
          )}
        </div>
      </div>

      <Link className="form__olvidaste" to="/resetPassword">
        ¿Olvidaste tu contraseña?
      </Link>

      <button className="form__button" type="submit">
        Ingresar
      </button>

      <div className="div__noTenesCuenta">
        <p>
          ¿Todavía no tenes cuenta?
          <Link to="/register"> Click aquí para registrarte</Link>
        </p>
      </div>
    </form>
  );
}
