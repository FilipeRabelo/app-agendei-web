import './doctors_add.css';
import NavBar from '../../components/navbar/navbar.jsx';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

export default function DoctorsAdd() {
  const { id_doctors } = useParams();
  
  const [ nameDoctor, setNameDoctors ] = useState('');
  const [ specialty, setSpecialty ] = useState('');
  const [ service, setService ] = useState('');
  const [ price, setPrice ] = useState('');

  return (
    <>
      <NavBar />

      <div className='container-fluid mt-page'>

        <div className='bg row col-lg-5 offset-lg-5'>

          <div className='col-12 mt-2'>
            <h2 className='h2'>
              {
                id_doctors > 0 ? 'Editar Médicos' : 'Novo Médico'
              }
            </h2>
          </div>

          <div className='col-12 mt-3'>
            <label htmlFor='doctor' className='form-label'>Novo Médico</label>

            <input
              className='form-control mb-2'
              type='text'
              placeholder='Nome do Médico'
              value={ nameDoctor }
              onChange={ (e) => setNameDoctors(e.target.value) }
            />
          </div>

          <div className='col-12 mt-3'>
            <label htmlFor='doctor' className='form-label'>Especialidade Médica</label>
            <input
              className='form-control mb-2'
              type='text'
              placeholder='Especialidade'
              value={ specialty }
              onChange={ (e) => setSpecialty(e.target.value) }
            />


          </div>

          <div className='col-12 mt-3'>
            <label htmlFor='service' className='form-label'>Serviço Prestado</label>

            <input
              className='form-control mb-2'
              type='text'
              placeholder='Especialidade'
              value={ service }
              onChange={ (e) => setService(e.target.value) }
            />
          </div>

          <div className='col-12 mt-3'>
            <label htmlFor='service' className='form-label'>Valor Serviço</label>

            <input
              className='form-control mb-2'
              type='text'
              placeholder='Preço'
              value={ price }
              onChange={ (e) => setPrice(e.target.value) }
            />
          </div>



          <div className='col-12 mt-4'>
            <div className='d-flex justify-content-end'>
              <button className='btn btn-primary me-3'>
                Salvar Agendamento
              </button>

              <Link to={ '/doctors' } className='btn btn-danger'>
                Cancelar
              </Link>
            </div>
          </div>

        </div>
      </div>

    </>
  )
};