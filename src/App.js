import "./App.css";
import IndexPage from "./pages/IndexPage/indexPage";
import Populares from "./pages/IndexPage/populares";
import InventarioPage from "./pages/InventarioPage/inventarioPage";
import PeliculaDetalle from "./pages/PeliculaDetalle/peliculaDetalle";
import Editar from "./pages/InventarioPage/editar";
import Nuevo from "./pages/InventarioPage/nuevo";
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage/loginPage";
import PopularDetalle from "./pages/PeliculaDetalle/popularesDetalle";
import InventarioPortada from "./pages/inventarioPortada/inventarioPage";
import NuevaPortada from "./pages/inventarioPortada/nuevaPortada";
import EditarPortada from "./pages/inventarioPortada/editarPortada";


function App() {
  return (
    <body className="container">
      <header>
        <Link to='/'>
          <img src="https://i.postimg.cc/mrqPbkfc/logon.png" />
        </Link>
      </header>
      <nav>
        <form>
          <input type="text" id="buscar" placeholder="Buscar..."></input>
          <button>
            <img src="https://i.postimg.cc/Hxb3XVgK/search.png" />
          </button>

        </form>
          <Link  to="/">
            <button class="btn-populares">Inicio</button>
          </Link>
          <Link  to="/populares">
            <button class="btn-populares">Peliculas populares</button>
          </Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/populares" element={<Populares />} />
          <Route path="/inventario" element={<InventarioPage />} />
          <Route path="/inventarioPortada" element={<InventarioPortada />} />
          <Route path="/detalle/:pelicula_id" element={<PeliculaDetalle />} />
          <Route path="/popular_detalle/:pelicula_id" element={<PopularDetalle />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/editar/:pelicula_id" element={<Editar />} />
          <Route path="/nueva_pelicula" element={<Nuevo />} />
          <Route path="/editar_portada/:portada_id" element={<EditarPortada />} />
          <Route path="/nueva_portada" element={<NuevaPortada />} />
        </Routes>
      </main>
      <footer>
        <div className="footer-titulo">
          <h3>CinePlex Cinema</h3>
          <p>Calle Falsa # 123 esquina</p>
        </div>
        <div className="footer-body">
          <div className="footer-texto">
            <ul>
              <li>
                <Link className="link" to="/">Inicio</Link>
              </li>
              <li>
                <Link className="link" to="/">Nosotros</Link>
              </li>
              <li>
                <Link className="link" to="/">Contactanos</Link>
              </li>
              <li>
                <Link className="link" to="/login">
                  Administrar
                </Link>
              </li>
            </ul>
          </div>
          <div className="mapa">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=central%20village&t=&z=11&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
        </div>
      </footer>
    </body>
  );
}

export default App;
