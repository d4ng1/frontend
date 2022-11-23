// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ("../../styles/login.css");

const LoginPage = () => {
  const nav = useNavigate();

  return (
    <main>
      <h1>Login</h1>
      <article className="login-card">
        <h3>Ingresar como Administrador</h3>
        <div className="login">
          <div className="input-label">
            <label>Usuario:</label>
            <input
              id="usuario"
              type="name"
              placeholder="Usuario..."
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Password:</label>
            <input
              id="password"
              type="password"
              placeholder="Password..."
              required
            ></input>
          </div>
          <button onClick={() => {if(document.getElementById("usuario").value == "admin" && document.getElementById("password").value == "admin"){nav('/inventario')} else{ alert("Datos invalidos")}}}>
            Entrar
          </button>
        </div>
      </article>
    </main>
  );
};

export default LoginPage;
