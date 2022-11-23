import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/inventario.css";
import axios from "axios";
import swal from "sweetalert";

const InventarioPage = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(
      'https://backendmern-g7.azurewebsites.net/api/peliculas'
    )
      .then((res) => res.json())
      .then((movies) => {
        showMovies(movies);
      })
      .catch((err) => console.log(err));
  },[]);

  function showMovies(movies) {
    setPeliculas(movies)
    console.log("movies: ",movies)
  }
  
  const HandleClick = (event, param) => {
    console.log("id a eliminar", param)
    swal({
      title: "Estas seguro?",
      text: "Se eliminara la pelicula de la lista!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((condicion) => {
      if (condicion) {
        swal("La pelicula ha sido eliminada!", {
          icon: "success",
        });
          axios.delete(`https://backendmern-g7.azurewebsites.net/api/peliculas/${param}`)
          .then(res => {
            console.log(res.data)      
            window.location.reload(true)
          })
          .then(err => {console.log(err)})
      } else {
        swal("No se ha borrado la pelicula!");
      }
    });
    }

  return (
    <main>
      <h1>Listado de Peliculas</h1>
      <hr />
      <article className="inventario-tabla">
        <table className="inventario-table">
          <tr>
            <th className="th-nombre">Nombre</th>
            <th className="th-tarifa">Tarifa</th>
            <th className="th-hora">Hora de Inicio</th>
            <th className="th-idioma">Idioma</th>
            <th className="th-tipo">Tipo</th>
            <th className="th-categoria">Categoria</th>
            <th className="th-restriccion">Restricciones</th>
            <th className="th-imagen">Imagen</th>
            <th className="th-trailer">Trailer</th>
            <th className="th-sinopsis">Sinopsis</th>
            <th className="th-portada">portada</th>
            <th className="th-accion">Accion</th>
          </tr>
          {peliculas.map((eachPeliculas) => {
            return (
              <tr>
                <td>{eachPeliculas.nombre}</td>
                <td>{eachPeliculas.tarifa}</td>
                <td>{eachPeliculas.hora_inicio}</td>
                <td>{eachPeliculas.idioma}</td>
                <td>{eachPeliculas.tipo}</td>
                <td>{eachPeliculas.categoria}</td>
                <td>{eachPeliculas.restriccion}</td>
                <td>
                  <img className="imagen-pelicula" src={eachPeliculas.imagen} />
                </td>
                <td>{eachPeliculas.trailer}</td>
                <td>{eachPeliculas.sinopsis}</td>
                <td className="td-portada">
                  <img src={eachPeliculas.portada}/>
                </td>
                <td className="inventario-accion">
                  <figure className="iconos">
                    <Link to={`/editar/${eachPeliculas._id}`}>
                      <img src="https://i.postimg.cc/8PtnSYzF/editar.png" />
                    </Link>
                    <Link onClick={event => HandleClick(event, eachPeliculas._id)} to="/inventario" >
                    <img src="https://i.postimg.cc/RVMb2m45/delete.png" />
                  </Link>
                  </figure>
                </td>

              </tr>
            );
          })}
        </table>
      </article>
      <Link className="link" to="/">
        <button>Volver</button>
      </Link>
      <Link className="link" to="/nueva_pelicula">
        <button>Nuevo</button>
      </Link>
      <Link className="link" to="/inventarioPortada">
        <button>Portadas</button>
      </Link>
    </main>
  );
};

export default InventarioPage;
