import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Logo from "../assets/logo.jpg";

const Paso2 = () => {
  const navigate = useNavigate();
  const [monto, setMonto] = useState("");
  const [estadoPago, setEstadoPago] = useState("");

  const handleChange = (e) => {
    const valor = parseFloat(e.target.value);
    setMonto(valor);
    setEstadoPago(valor >= 3000 ? "Monto aceptado" : "Monto insuficiente, monto minimo: S/. 3000");
  };

  return (
    <div className="payone-paso2-container">
      <img src={Logo} width={200} height={80} alt="logo" />
      <div className="payone-paso2-step">2</div>
      <h1 className="payone-paso2-title">Negociemos la deuda...</h1>

      <div className="payone-paso2-input-container">
        <div className="payone-paso2-icon">
          <CheckCircle size={40} color="#28a745" />
        </div>
        <div className="payone-paso2-content">
          <label className="payone-paso2-label">Propuesta de pago:</label>
          <div className="payone-paso2-input-wrapper">
            <span className="payone-paso2-span">S/. </span>
            <input
              type="number"
              className="payone-paso2-input"
              placeholder="3000"
              value={monto}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {monto !== "" && (
        <div className="payone-paso2-subtitle">
          {estadoPago === "Monto aceptado" ? (
            <>
              <div className="payone-paso2-input-container">
                <div className="payone-paso2-icon">
                  <CheckCircle size={40} color="#28a745" />
                </div>
                <div className="payone-paso2-content">
                  <label className="payone-paso2-label">Propuesta de pago</label>
                  <span>{estadoPago}</span>
                </div>
              </div>
              <div className="payone-paso2-input-container">
                <div className="payone-paso2-icon">
                  <CheckCircle size={40} color="#28a745" />
                </div>
                <div className="payone-paso2-content">
                  <label className="payone-paso2-label">Descuento aplicado 70%</label>
                </div>
              </div>
            </>
          ) : (
            <span style={{ color: "red", fontWeight: "bold" }}>{estadoPago}</span>
          )}
        </div>
      )}

      {estadoPago === "Monto aceptado" && (
        <button className="payone-paso2-btn" onClick={() => navigate("/paso-3")}>
          Siguiente
        </button>
      )}
    </div>
  );
};

export default Paso2;
