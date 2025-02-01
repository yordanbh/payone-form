import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
  };

  return (
    <div className="container">
      <div className="payone-login-card">
        <h1 className="payone-title">
          Pay<span className="payone-green">One</span>
        </h1>
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

              <button type="submit" className="payone-button" disabled={isSubmitting}>
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
