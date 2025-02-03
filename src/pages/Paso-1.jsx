import React from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/logo.jpg";

const Paso1 = () => {
  const navigate = useNavigate();

  return (
    <div className="payone-paso1-container">
      <img src={Logo} width={200} height={80} alt="logo" />
      <div className="payone-paso1-steps">
        <div className="payone-paso1-step">1</div>
        <p className="payone-paso1-subtitle">Ubiquemos tu deuda...</p>
        <div className="payone-paso1-content">
          <h2>Entidad:</h2>
          <p>BCP - CEDIDA al Estudio Finanty.</p>
        </div>
        <div className="payone-paso1-content">
          <h2>Monto:</h2>
          <p>S/ 10.000</p>
        </div>
        <div className="payone-paso1-content">
          <h2>Antiguedad:</h2>
          <p>3 años</p>
        </div>
      </div>

      <button className="payone-paso1-btn" onClick={() => navigate("/paso-2")}>
        Siguiente
      </button>
    </div>
  );
};

export default Paso1;