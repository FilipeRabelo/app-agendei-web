
import './appointments.css';
import { Link } from "react-router-dom";
import { appointments, doctors } from '../../constants/data.js';
import Appointment from "../../components/appointment/appointment.jsx";
import NavBar from "../../components/navbar/navbar";


export default function Appointments() {

  function ClickEdite(id_appointment) {
    alert("ClickEdite" + id_appointment);
  }

  function ClickDelete(id_appointment) {
    alert("ClickDelete" + id_appointment);
  }

  return (
    <div className="container-fluid mt-page">
      <NavBar />

      <div className="d-flex justify-content-between align-items-center">

        <div className="d-flex align-items-center" >
          <h2 className="d-inline h2">Agendamentos</h2>
          <Link to='/appointments/add' className='btn btn-outline-primary ms-3 mb-1'>
            Novo Agendamento
          </Link>
        </div>

        <div className="d-flex justify-content-end align-items-center">

          <input id="startDate" className="form-control" type="date" />
          <span className="m-2">Até</span>
          <input id="startEndDate" className="form-control" type="date" />

          <div className="form-control ms-3 me-3">
            <select name="doctor" id="doctor" className="select-custom">
              <option value="">Todos os Médicos</option>
              {
                doctors.map((medico) => {
                  return (
                    <option key={ medico } value={ medico.id_doctor }>
                      { medico.name }
                    </option>
                  )
                })
              }
            </select>
          </div>

          <button className="btn btn-primary">
            Filtrar
          </button>

        </div>

      </div>

      <div className="mt-3">
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
                    user={ Appoint.user}
                    doctor={ Appoint.doctor }
                    service={ Appoint.service }
                    booking_date={ Appoint.booking_date }
                    booking_hour={ Appoint.booking_hour }
                    price={ Appoint.price }
                    clickEdite={ ClickEdite }
                    clickDelete={ ClickDelete }
                  />
                )
              })
            }
          </tbody>
        </table>
      </div>

    </div>
  );
}