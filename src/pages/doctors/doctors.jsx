import './doctors.css';
import NavBar from "../../components/navbar/navbar.jsx";
import DoctorRow from "../../components/DoctorRow/doctorRow.jsx";
import api from '../../constants/api.js';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function Doctors() {
  const navigate = useNavigate();

  const [ doctors, setDoctors ] = useState([]);
  const [ idDoctor, setIdDoctor ] = useState('');
  const [ getServices, setGetServices ] = useState([])


  async function LoadDoctors() {
    try {
      const response = await api.get('/doctors');
      if (response.data) {
        setDoctors(response.data);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        return navigate('/');
      }
      alert('Erro ao listar os médicos. Tente novamente mais tarde');
    }
  }

  async function LoadServices(){
    try {

      const response = await api.get("/doctors/", {
        id_service: id_service,

      });

      if (response.data) {
        setGetServices(response.data);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        return navigate('/');
      }
      alert('Erro ao listar os médicos. Tente novamente mais tarde');
    }
  }


  function ClickEdit(id_doctor) {
    navigate('/doctors/edit/' + id_doctor);
  }

  function ClickDelete(id_doctor) {
    alert("ClickDelete" + id_doctor);
  }

  function ChangeDoctor(e) {
    setIdDoctor(e.target.value);
  }

  useEffect(() => {
    LoadDoctors();
    LoadServices();
  }, []);
  

  return (
    <div className="container-fluid mt-page col-9">
      <NavBar />
      <h2 className='mt-4 mb-4'>Médicos</h2>

      <div className="d-flex flex-column align-items-start">
        <div className="mb-3 col-12 w-100 text-center">
          <Link to="/doctors/edit" className="btn btn-primary sm-2 w-100">
            Novo Cadastro
          </Link>
        </div>

        <div className="d-flex flex-inline flex-md-row w-100 col-12 mb-3 justify-content-start align-items-center">
          <div className="form-control d-flex me-2 mb-md-0">
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

          <div className='col-3'>
            <button onClick={ LoadDoctors } className="btn btn-primary w-100 mb-md-0" type='button'>
              Filtrar
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3 borde">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="bg-primary rounded-3">
              <tr>
                <th scope='col'>Médico</th>
                <th scope='col'>Especialidade</th>
                <th scope='col'>Serviço</th>
                <th scope='col' className="text-center">Valor</th>
                <th scope='col' className="col-buttons"></th>
              </tr>
            </thead>
            <tbody>
             {
                doctors.map((medico) => {
                  return (
                    <DoctorRow
                      key={ medico.id_service }
                      id_doctor={ medico.id_doctor }
                      nameDoctor={ medico.name }
                      specialty={ medico.specialty }
                      service={ medico.service }
                      price={ medico.price}
                      clickEdit={ ClickEdit }
                      clickDelete={ ClickDelete }
                    />
                  );
                })
              }            

              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
















// const [ servicos, setServicos ] = useState([]); // Certifique-se de inicializar como array

// async function LoadServices() {
//   try {
//     const response = await api.get('/services');
//     if (response.data) {
//       setServicos(response.data);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }


////////////////////////////////


{/* {
                doctors.map((medico) => {

                  return (
                    <DoctorRow
                      key={ medico.id_doctor }
                      id_doctor={ medico.id_doctor }
                      nameDoctor={ medico.name }
                      specialty={ medico.specialty }
                      // service={ medico.service } // usando servico.description
                      // price={ medico.price}
                      clickEdit={ ClickEdit }
                      clickDelete={ ClickDelete }
                    />
                  );
                })
              }
              {
                appointments.map((app) => {
                  return (
                    <DoctorRow key={ app.id_appointment }      // envidando as props para o component
                      id_appointment={ app.id_appointment }
                      service={ app.service }
                      price={ app.price }
                    />
                  )
                })
              } */}