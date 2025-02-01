import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

import Paso1 from "./pages/Paso-1";
import Paso2 from "./pages/Paso-2";
import Paso3 from "./pages/Paso-3";

import Confirmacion from "./pages/Confirmation";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/paso-1" element={<Paso1 />} />
        <Route path="/paso-2" element={<Paso2 />} />
        <Route path="/paso-3" element={<Paso3 />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
      </Routes>
    </Router>
  );
}

export default App;
