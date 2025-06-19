import React from "react";
import "./ResetPasswordScreen.css";
import Navbar from "../components/Navbar/Navbar";
import ResetPasswordForm from "../components/ResetPasswordForm/ResetPasswordForm";

export default function ResetPasswordScreen() {
  return (
    <div>
      <Navbar></Navbar>
      <ResetPasswordForm />
    </div>
  );
}
