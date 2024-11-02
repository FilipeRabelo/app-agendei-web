import './appointment_add.css'
import NavBar from "../../components/navbar/navbar"
import { doctors, doctors_services } from '../../constants/data';
import { Link, useParams } from 'react-router-dom';


export default function AppointmentAdd() {

  const { id_appointment } = useParams();

  return (
    <>
      <NavBar />
      <div className='container-fluid mt-page'>

        <div className='bg row col-lg-7 offset-lg-7'>

          <div className='col-12 mt-2'>
            <h2 className='h2'>
              {
                id_appointment > 0 ? 'Editar Agendamento' : 'Novo Agendamento'
              }
            </h2>
          </div>

          <div className='col-12 mt-3'>
            <label htmlFor='doctor' className='form-label'>Médico</label>

            <div className="form-control mb-2">
              <select name="doctor" id="doctor">
                <option value="0">Selecione o Médico</option>
                {
                  doctors.map((medico) => {
                    return (
                      <option key={ medico.id_doctor } value={ medico.id_doctor }>
                        { medico.name }
                      </option>
                    )
                  })
                }
              </select>
            </div>
          </div>

          <div className='col-12 mt-3'>
            <label htmlFor='service' className='form-label'>Serviço</label>

            <div className="form-control mb-2">
              <select name="service" id="service">
                <option value="0">Selecione o Serviço</option>
                {
                  doctors_services.map((medico) => {
                    return (
                      <option key={ medico.id_service } value={ medico.description }>
                        { medico.description }
                      </option>
                    )
                  })
                }
              </select>
            </div>
          </div>

          <div className='col-6 mt-3'>
            <label htmlFor='bookingDate' className='form-label'>Data</label>
            <input className='form-control' type='date' name='bookingDate' id='bookingDate' />
          </div>

          <div className='col-6 mt-3'>
            <label htmlFor='bookingHour' className='form-label'>Horário</label>

            <div className='form-control mb-2'>
              <select name='bookingHour' id='bookingHour'>
                <option value='0'>Horário</option>
                <option value='09:00'>09:00</option>
                <option value='09:00'>09:30</option>
                <option value='09:00'>10:00</option>
                <option value='09:00'>10:30</option>
                <option value='09:00'>11:00</option>
              </select>
            </div>
          </div>

          <div className='col-12 mt-4'>
            <div className='d-flex justify-content-end'>
              <button className='btn btn-primary me-3'>
                Salvar Agendamento
              </button>

              <Link to={ '/appointments' } className='btn btn-danger'>
                Cancelar
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}