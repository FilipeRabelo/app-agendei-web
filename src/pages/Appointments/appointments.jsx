
import './appointments.css';
import { Link, useNavigate } from "react-router-dom";
import { appointments, doctors } from '../../constants/data.js';
import Appointment from "../../components/appointment/appointment.jsx";
import NavBar from "../../components/navbar/navbar.jsx";

export default function Appointments() {

  const navigate = useNavigate()

  function ClickEdit(id_appointment) {
    navigate('/appointments/edit/' + id_appointment)
  }

  function ClickDelete(id_appointment) {
    alert("ClickDelete" + id_appointment);
  }

  return (
    <div className="container-fluid mt-page col-11">
      <NavBar />

      {/* <h2>Agendamentos</h2>  */ }

      <div className="d-flex flex-column align-items-start">

        <div className="mb-3 col-12 w-100 text-center">
          <Link to="/appointments/add" className="btn btn-primary sm-2 w-100">
            Novo Agendamento
          </Link>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-start align-items-center w-100">
          <input id="startDate" className="form-control mb-2 mb-md-0" type="date" />
          <span className="m-2">Até</span>
          <input id="startEndDate" className="form-control mb-3 mb-md-0" type="date" />

          <div className="form-control ms-3 me-3 mb-3 mb-md-0 ">
            <select name="doctor" id="doctor" className="select-custom">
              <option value="">Todos os Médicos</option>
              {
                doctors.map((medico) => (
                  <option key={ medico.id_doctor } value={ medico.id_doctor }>
                    { medico.name }
                  </option>
                ))
              }
            </select>
          </div>

          <button className="btn btn-primary w-100 mb-1 mb-md-0">
            Filtrar
          </button>
        </div>

      </div>



      <div className="mt-3 borde">
        <div className="table-responsive">
          <table className="table table-hover">

            <thead className="bg-primary rounded-3">
              <tr>
                <th scope='col'>Paciente</th>
                <th scope='col'>Médico</th>
                <th scope='col'>Serviço</th>
                <th scope='col'>Data/Hora</th>
                <th scope='col' className="text-end">Valor</th>
                <th scope='col' className="col-buttons"></th>
              </tr>
            </thead>

            <tbody>
              {
                appointments.map((Appoint) => {
                  return (
                    <Appointment key={ Appoint.id_appointment }      // envidando as props para o component
                      id_appointment={ Appoint.id_appointment }
                      user={ Appoint.user }
                      doctor={ Appoint.doctor }
                      service={ Appoint.service }
                      booking_date={ Appoint.booking_date }
                      booking_hour={ Appoint.booking_hour }
                      price={ Appoint.price }
                      clickEdit={ ClickEdit }
                      clickDelete={ ClickDelete }
                    />
                  )
                })
              }
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
}
