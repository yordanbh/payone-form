import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react"; 

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="payone-confirmation-container">
      <CheckCircle className="payone-confirmation-icon" size={80} />

      <h1 className="payone-confirmation-title">¡Pago realizado con éxito!</h1>
      <p className="payone-confirmation-text">
        Tu pago ha sido procesado correctamente. Gracias por confiar en nuestro servicio.
      </p>

      <button className="payone-confirmation-btn" onClick={() => navigate("/")}>
        Volver al inicio
      </button>
    </div>
  );
};

export default Confirmation;