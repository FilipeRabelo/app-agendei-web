import "./login.css";
import logo from "../../assets/logo.png";
import fundo from "../../assets/fundo.png";
import api from "../../constants/api";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {

  const [ email, setEmail ] = useState('adm@teste.com');
  const [ password, setPassword ] = useState('123');
  const [ msg, setMsg ] = useState('');

  const navigate = useNavigate();

  async function ExecuteLogin() {

    setMsg('');

    try {

      const response = await api.post('/admin/login', {
        // o que vai ser enviado no corpo da requisição
        email: email,
        password: password
      });

      if (response.data) {      // login bem sucedido
        
        localStorage.setItem('sessionToken', response.data.token);
        localStorage.setItem('sessionId', response.data.id_admin);
        localStorage.setItem('sessionEmail', response.data.email);
        localStorage.setItem('sessionName', response.data.name);

        api.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;

        navigate("/appointments");

      } else {
        setMsg('Error ao efetuar Login. Tente novamente mais tarde')
      }

    } catch (error) {
      if (error.response?.data.error) {
        setMsg(error.response?.data.error);
      }else{
        setMsg('Error ao efetuar Login. Tente novamente mais tarde')
      }        
    } 
    //preciso salvar no local storage por causa do token, para ficar salvo o login
    
    
    setEmail('')
    setPassword('');
  }

  return (
    <div className="row">
      <div className="col-sm-5 d-flex justify-content-center align-items-center text-center">

        <form action="" className="form-signin ">
          <img src={ logo } className="img-logo mb-4" />

          <h5 className="mb-5">
            Gerencie seus agendamentos de forma descomplicada.
          </h5>
          <h5 className="mb-4 text-primary">Acesse sua conta</h5>

          <div className="mb-2">
            <input
              className="form-control"
              type="email"
              placeholder="E-mail:"
              value={ email }
              onChange={ (e) => setEmail(e.target.value) } // pegando e jogando dentro da variavel email
            />
          </div>


          <div className="mb-2">
            <input
              className="form-control"
              type="password"
              placeholder="Senha:"
              value={ password }
              onChange={ (e) => setPassword(e.target.value) }
            />
          </div>


          <div className="mt-3 mb-5">
            <button onClick={ ExecuteLogin } type="button" className="btn btn-primary w-100" >
              Acessar
            </button>
          </div>


          {/* // ALERT DO BOOTSTRAP  */ }

          {
            msg.length > 0 &&
            <div className="alert alert-danger" role="alert">
              { msg }
            </div>
          }



          <div>
            <span className="me-1">Não Tenho uma Conta.</span>
            <Link className="link" to="/register">
              Criar Agora
            </Link>
          </div>

        </form>

      </div >

      <div className="col-sm-7">
        <img src={ fundo } className="background-login d-none d-sm-block" />
      </div>

    </div >
  );
}
