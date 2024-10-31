import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Appointments from "./pages/appointments/appointments";
import Doctors from "./pages/doctors/doctors";

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