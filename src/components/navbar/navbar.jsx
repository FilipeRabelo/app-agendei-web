
import './navbar.css'
import logo from '../../assets/logo-white.png';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {

  const navigate = useNavigate();

  function Logout() {      // remover o localStorage    

    localStorage.removeItem('sessionToken');
    localStorage.removeItem('sessionId');
    localStorage.removeItem('sessionEmail');
    localStorage.removeItem('sessionName');

    navigate('/');
    
    api.defaults.headers.common[ 'Authorization' ] = ''; // limpando o cabeçalho
  }
  
  return (
    <nav className="navbar fixed-top navbar-expand-sm bg-primary justify-items-center" data-bs-theme="dark">
      
      <div className="container-fluid">
        <Link className="navbar-brand" to="/appointments">
          <img className='navbar-logo' src={ logo } />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-sm-0">           {/* lado esquerdo da nav */ }
            <li className="nav-item">
              <Link className="nav-link active" to="/appointments">Agendamentos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/doctors">Médicos</Link>
            </li>
          </ul>

          <ul className="navbar-nav">                               {/* lado direito da nav */ }
            <li className='navbar-item'>
              <div className="btn-group">

                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {
                   localStorage.getItem('sessionName') 
                  }
                </button>

                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="#">Meu perfil</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><button className="dropdown-item" onClick={Logout}>Desconectar</button></li>
                </ul>

              </div>
            </li>
          </ul>

        </div>

      </div>
    </nav>
  );
};