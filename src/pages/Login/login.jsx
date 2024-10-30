import "./login.css";
import logo from "../../assets/logo.png";
import fundo from '../../assets/fundo.png'

export default function Login() {
  return (
    <div className="row">
      
      <div className="col-sm-5 d-flex justify-content-center align-items-center text-center">
        <form action="">
          <img src={logo} className="form-signin" />
          <h5>Gerencie seus agendamentos de forma descomplicada.</h5>
          <h5>Acesse sua conta</h5>

          <div>
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
          </div>
          <div>
            <button>Acessar</button>
          </div>
          <div>
            <span>Não Tenho uma Conta</span>
            <a href="#">Criar Agora</a>
          </div>
        </form>
      </div>

      <div className="col-sm-7">
        <img src={fundo} className="background-login" />
      </div>
    </div>
  );
}
