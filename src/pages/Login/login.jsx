import "./login.css";
import logo from "../../assets/logo.png";
import fundo from '../../assets/fundo.png'

export default function Login() {
  return (
    <div className="row">

      <div className="col-sm-5 d-flex">
        <form action="">
          <img src={logo} />
          <h5>Gerencie seus agendamentos de forma descomplicada.</h5>
          <h5>Acesse sua conta</h5>

          <div>
            <input type="email" placeholder="E-mail"/>
            <input type="password" placeholder="Senha"/>
          </div>
          <div>
            <button >
              Acessar
            </button>
          </div>
          <div>
            <span>Não Tenho uma Conta</span>
            <a href="#">Criar Agora</a>
          </div>
        </form>
      </div>

      <div className="col-sm-7 d-flex">
        <img src={fundo}/>
      </div>

    </div>
  );
}
