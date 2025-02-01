import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Logo from "../assets/logo.jpg";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Requerido"),
  lastname: Yup.string().required("Requerido"),
  dni: Yup.string().required("Requerido"),
  email: Yup.string().email("Correo inválido").required("Requerido"),
  phone: Yup.string().required("Requerido"),
  address: Yup.string(),
});

function Register() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="payone-container">
        <img src={Logo} width={200} height={80} alt="logo" />
        <h2 className="payone-title">Registro</h2>
        <Formik
          initialValues={{ name: "", lastname: "", dni: "", email: "", phone: "", address: "" }}
          validationSchema={RegisterSchema}
          onSubmit={() => {
            setShowPopup(true);
          }}
        >
          {({ handleSubmit }) => (
            <Form className="payone-form" onSubmit={handleSubmit}>
              <div className="payone-input-group">
                <label className="payone-label">Nombre</label>
                <Field type="text" name="name" className="payone-input" />
                <ErrorMessage name="name" component="div" className="payone-error" />
              </div>
              <div className="payone-input-group">
                <label className="payone-label">Apellido</label>
                <Field type="text" name="lastname" className="payone-input" />
                <ErrorMessage name="lastname" component="div" className="payone-error" />
              </div>
              <div className="payone-input-group">
                <label className="payone-label">DNI</label>
                <Field type="text" name="dni" className="payone-input" />
                <ErrorMessage name="dni" component="div" className="payone-error" />
              </div>
              <div className="payone-input-group">
                <label className="payone-label">Correo</label>
                <Field type="email" name="email" className="payone-input" />
                <ErrorMessage name="email" component="div" className="payone-error" />
              </div>
              <div className="payone-input-group">
                <label className="payone-label">Celular</label>
                <Field type="text" name="phone" className="payone-input" />
                <ErrorMessage name="phone" component="div" className="payone-error" />
              </div>
              <div className="payone-input-group">
                <label className="payone-label">Dirección</label>
                <Field type="text" name="address" className="payone-input" />
                <ErrorMessage name="address" component="div" className="payone-error" />
              </div>
              <button type="submit" className="payone-button">Registrarse</button>
            </Form>
          )}
        </Formik>
      </div>
      {showPopup && (
        <div className="payone-popup">
          <div className="payone-popup-content">
            <p>Se te envió un código a tu correo para tu acceso.</p>
            <button className="payone-button" onClick={() => navigate("/login")}>Aceptar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;