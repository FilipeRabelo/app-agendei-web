
import "./register.css";
import logo from "../../assets/logo.png";
import fundo from "../../assets/fundo.png";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="row">
      <div className="col-sm-5 d-flex justify-content-center align-items-center text-center">
        
        <form action="" className="form-signin">
          <img src={logo} className="img-logo mb-4" />
          <h5 className="mb-5">Crie sua conta agora mesmo.</h5>
          <h5 className="mb-4 text-primary">Preencha os campos abaixo</h5>

          <div className="mb-2">
            <input className="form-control" type="text" placeholder="Nome:" />
          </div>

          <div className="mb-2">
            <input
              className="form-control"
              type="email"
              placeholder="E-mail:"
            />
          </div>

          <div className="mb-2">
            <input
              className="form-control"
              type="password"
              placeholder="Senha:"
            />
          </div>
          <div className="mb-2">
            <input
              className="form-control"
              type="password"
              placeholder="Confirme a Senha:"
            />
          </div>

          <div className="mt-3 mb-5">
            <button className="btn btn-primary w-100">
              Criar minha Conta
            </button>
          </div>

          <div>
            <span className="me-1">Já Tenho uma Conta.</span>
            <Link className="link" to="/">
              Acessar Agora
            </Link>
          </div>
        </form>
      </div>

      <div className="col-sm-7">
        <img src={fundo} className="background-login" />
      </div>
    </div>
  );
}
