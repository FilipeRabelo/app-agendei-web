
import "./register.css";
import logo from "../../assets/logo.png";
import fundo from "../../assets/fundo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../constants/api";


export default function Register() {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ password2, setPassword2 ] = useState('');
  const [ msg, setMsg ] = useState('');

  const navigate = useNavigate();

  async function ExecuteAccount() {

    setMsg('');

    if(password != password2){
      return setMsg('As senhas não conferem!')
    }

    try {

      const response = await api.post('/admin/register', {
        // o que vai ser enviado no corpo da requisição
        name: name,
        email: email,
        password: password
      });

      console.log(name, email, password)

      if (response.data) {      // login bem sucedido

        localStorage.setItem('sessionToken', response.data.token);
        localStorage.setItem('sessionId', response.data.id_admin);
        localStorage.setItem('sessionEmail', email);
        localStorage.setItem('sessionName', name);

        api.defaults.headers.common[ 'Authorization' ] = 'Bearer ' + response.data.token;

        navigate("/appointments");

      } else {
        setMsg('Error ao criar conta. Tente novamente mais tarde')
      }

    } catch (error) {
      if (error.response?.data.error) {
        setMsg(error.response?.data.error);  // capturando o error la da api
      } else {
        setMsg('Error ao criar conta. Tente novamente mais tarde')
      }
    }
    //preciso salvar no local storage por causa do token, para ficar salvo o login


    setEmail('')
    setPassword('');
  }

  return (
    <div className="row">
      <div className="col-sm-5 d-flex justify-content-center align-items-center text-center">

        <form action="" className="form-signin">
          <img src={ logo } className="img-logo mb-4" />
          <h5 className="mb-5">Crie sua conta agora mesmo.</h5>
          <h5 className="mb-4 text-primary">Preencha os campos abaixo</h5>

          <div className="mb-2">
            <input
              className="form-control"
              type="text"
              placeholder="Nome:"
              value={name}
              onChange={(e) => setName(e.target.value) }
            />
          </div>


          <div className="mb-2">
            <input
              className="form-control"
              type="email"
              placeholder="E-mail:"
              value={email}
              onChange={(e) =>  setEmail(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <input
              className="form-control"
              type="password"
              placeholder="Senha:"
              value={password}
              onChange={(e) => setPassword(e.target.value) }
            />
          </div>
          <div className="mb-2">
            <input
              className="form-control"
              type="password"
              placeholder="Confirme a Senha:"
              value={ password2 }
              onChange={ (e) => setPassword2(e.target.value) }
            />
          </div>

          <div className="mt-3 mb-5">
            <button onClick={ ExecuteAccount } type="button" className="btn btn-primary w-100">
              Criar minha Conta
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
            <span className="me-1">Já Tenho uma Conta.</span>
            <Link className="link" to="/">
              Acessar Agora
            </Link>
          </div>
        </form>
      </div>

      <div className="col-sm-7">
        <img src={ fundo } className="background-login d-none d-sm-block" />
      </div>
    </div>
  );
}
