import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/login/login.jsx'
import Register from "./pages/register/register.jsx";
import Appointments from "./pages/appointments/appointments.jsx";
import AppointmentAdd from "./pages/appointment_add/appointment_add.jsx";
import Doctors from "./pages/doctors/doctors.jsx";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/appointments" element={ <Appointments /> } />
        <Route path="/appointments/add" element={ <AppointmentAdd /> } />
        <Route path="/appointments/edit/:id_appointment" element={ <AppointmentAdd /> } />
        <Route path="/doctors" element={ <Doctors /> } />
      </Routes>
    </BrowserRouter>
  );
};