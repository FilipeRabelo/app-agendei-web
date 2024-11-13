
import './appointments.css';
import NavBar from "../../components/navbar/navbar.jsx";
import Appointment from "../../components/appointment/appointment.jsx";
import api from '../../constants/api.js';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';


export default function Appointments() {

  const navigate = useNavigate();

  const [ appointments, setAppointments ] = useState([]);
  const [ doctors, setDoctors ] = useState([]);
  const [ idDoctor, setIdDoctor ] = useState('');
  
  const [ dtStart, setDtStart ] = useState('');
  const [ dtEnd, setDtEnd ] = useState('');


  function ClickEdit(id_appointment) {
    navigate('/appointments/edit/' + id_appointment)
  }

  function ClickDelete(id_appointment) {
    alert("ClickDelete" + id_appointment);
  }


  async function LoadDoctors() {          // lista de medicos

    console.log('LoadAppointments...')

    try {
      const response = await api.get('/doctors');

      if (response.data) {
        setDoctors(response.data)
      }
    }

    catch (error) {
      if (error.response?.data.error) {

        if (error.response.status == 401) {
          return navigate('/');
        }

        // alert(error.response?.data.error);

      } else {
        alert('Error ao listar os medicos. Tente novamente mais tarde')
      }
    }
  }

  async function LoadAppointments() {   // lista de dados

    // console.log('LoadAppointments...')

    try {
      const response = await api.get('/admin/appointments', {
        params: {
          id_doctor: idDoctor,
          dt_start: dtStart,
          dt_end: dtEnd
        }
      });

      if (response.data) {
        setAppointments(response.data); // jogando os dados recebidos da api p dentro da variavel
      }
    }

    catch (error) {
      if (error.response?.data.error) {
        
        if(error.response.status == 401){
          return navigate('/');
        }

        // alert(error.response?.data.error);

      } else {
        alert('Error ao efetuar Login. Tente novamente mais tarde')
      }
    }
  }

  function ChangeDoctor(e) {
    setIdDoctor(e.target.value);
  }

  useEffect(() => {

    LoadDoctors();        // carregando lista de medicos
    LoadAppointments();   // carregando lista de agendamentos

  }, []);



  return (
    <div className="container-fluid mt-page col-9">
      <NavBar />

      <h2 className='mt-4 mb-4'>Agendamentos</h2>

      <div className="d-flex flex-column align-items-start">

        <div className="mb-3 col-12 w-100 text-center">
          <Link to="/appointments/add" className="btn btn-primary sm-2 w-100">
            Novo Agendamento
          </Link>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-start align-items-center w-100">
          <input
            id="startDate"
            className="form-control mb-2 mb-md-0"
            type="date"
            onChange={(e) => setDtStart(e.target.value) }
          />

          <span className="m-2">Até</span>

          <input
            id="startEndDate"
            className="form-control mb-3 mb-md-0"
            type="date"
            onChange={(e) => setDtEnd(e.target.value) }
          />

          <div className="form-control ms-3 me-3 mb-3 mb-md-0 ">

            <select
              value={ idDoctor }
              onChange={ ChangeDoctor }
              name="doctor" id="doctor"
              className="select-custom"
            >

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

          <button onClick={ LoadAppointments } className="btn btn-primary w-100 mb-1 mb-md-0 type='button">
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
                <th scope='col' >Médico</th>
                <th scope='col'>Serviço</th>
                <th scope='col'>Data / Hora</th>
                <th scope='col' className="text-center">Valor</th>
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
