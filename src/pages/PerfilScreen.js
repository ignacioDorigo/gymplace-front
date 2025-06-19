// import React, { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import axios from "axios";
// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
// import "./PerfilScreen.css";

// export default function PerfilScreen() {
//   const { email, logout } = useContext(AuthContext);
//   const [imagen, setImagen] = useState(null);
//   const [url, setUrl] = useState("");

//   const handleSeleccion = (e) => {
//     setImagen(e.target.files[0]);
//   };

//   const handleSubida = async () => {
//     if (!imagen) return;

//     const data = new FormData();
//     data.append("file", imagen);
//     data.append("upload_preset", "YOUR_UPLOAD_PRESET"); // desde tu cuenta de Cloudinary
//     data.append("cloud_name", "dsnr3w6bx");

//     try {
//       const res = await axios.post(
//         "https://api.cloudinary.com/v1_1/dsnr3w6bx/image/upload",
//         data
//       );
//       setUrl(res.data.secure_url);
//       alert("Imagen subida correctamente");
//       // Aquí podrías guardar la URL en tu backend asociada al email
//     } catch (err) {
//       console.error("Error al subir imagen", err);
//     }
//   };

//   const cerrarSesion = () => {
//     logout();
//   };

//   return (
//     <div>
//       <Navbar />
//       <h2>Perfil de {email}</h2>

//       {url && <img src={url} alt="Imagen perfil" className="perfil__img" />}

//       <input type="file" accept="image/*" onChange={handleSeleccion} />
//       <button onClick={handleSubida}>Subir Imagen</button>

//       <button onClick={cerrarSesion}>Cerrar Sesión</button>
//       <Footer />
//     </div>
//   );
// }
import React from "react";

export default function PerfilScreen() {
  return <div>PerfilScreen</div>;
}
