import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Register from "./pages/Register/register";
import Appointments from "./pages/Appointments/appointments";
import Doctors from "./pages/Doctors/doctors";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/appointments" element={ <Appointments /> } />
        <Route path="/doctors" element={ <Doctors /> } />
      </Routes>
    </BrowserRouter>
  );
};