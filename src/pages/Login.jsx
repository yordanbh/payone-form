import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Logo from "../assets/logo.jpg";

const Login = () => {
  const initialValues = {
    user: "",
    password: "",
  };

  const validationSchema = Yup.object({
    user: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  });

  const handleSubmit = (values) => {
    console.log("Formulario enviado:", values);
    window.location.href = "/paso-1";
  };

  return (
    <div className="container">
      <div className="payone-login-card">
        <img src={Logo} width={200} height={80} alt="logo" />
        <p className="payone-subtitle">Inicia sesión en tu cuenta</p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="payone-form">
              <div>
                <Field
                  type="text"
                  name="user"
                  placeholder="Usuario"
                  className="payone-input"
                />
                <ErrorMessage name="user" component="div" className="payone-error" />
              </div>

              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  className="payone-input"
                />
                <ErrorMessage name="password" component="div" className="payone-error" />
              </div>

              <button type="submit" className="payone-button" disabled={isSubmitting} onClick={handleSubmit}>
                {isSubmitting ? "Cargando..." : "Ingresar"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
