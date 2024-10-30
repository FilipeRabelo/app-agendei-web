import "./login.css";
import logo from "../../assets/logo.png";
import fundo from "../../assets/fundo.png";

export default function Login() {
  return (
    <div className="row">
      <div className="col-sm-5 d-flex justify-content-center align-items-center text-center">
        <form action="" className="form-signin">
          <img src={logo} className="img-logo mb-4" />
          <h5 className="mb-5">
            Gerencie seus agendamentos de forma descomplicada.
          </h5>
          <h5 className="mb-4 text-primary">Acesse sua conta</h5>

          <div className="mb-3">
            <input className="form-control" type="email" placeholder="E-mail:" />
          </div>

          <div className="mb-2">
            <input
              className="form-control"
              type="password"
              placeholder="Senha:"
            />
          </div>

          <div className="mt-3 mb-5">
            <button className="btn btn-primary w-100">Acessar</button>
          </div>

          <div>
            <span className="me-1">Não Tenho uma Conta.</span>
            <a className="link" href="#">
              Criar Agora
            </a>
          </div>
        </form>
      </div>

      <div className="col-sm-7">
        <img src={fundo} className="background-login" />
      </div>
    </div>
  );
}
