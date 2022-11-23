import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/inventario.css";
import axios from "axios";
import swal from "sweetalert";

const InventarioPortada = () => {
  const [portada, setPortada] = useState([]);

  useEffect(() => {
    fetch(
      'http://localhost:5005/api/portada'
    )
      .then((res) => res.json())
      .then((portada) => {
        showPortada(portada);
      })
      .catch((err) => console.log(err));
  },[]);

  function showPortada(portada) {
    setPortada(portada)
    console.log("portada: ",portada)
  }
  
  const HandleClick = (event, param) => {
    console.log("id a eliminar", param)
    swal({
      title: "Estas seguro?",
      text: "Se eliminara la portada de la lista!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((condicion) => {
      if (condicion) {
        swal("La portada ha sido eliminada!", {
          icon: "success",
        });
          axios.delete(`http://localhost:5005/api/portada/${param}`)
          .then(res => {
            console.log(res.data)      
            window.location.reload(true)
          })
          .then(err => {console.log(err)})
      } else {
        swal("No se ha borrado la portada!");
      }
    });
    }

  return (
    <main>
      <h1>Listado de Portadas</h1>
      <hr />
      <article className="inventario-tabla">
        <table className="inventario-table">
          <tr>
            <th className="th-nombre">Descripcion</th>
            <th className="th-tarifa">Precio</th>
            <th className="th-hora">Imagen</th>            
          </tr>
          {portada.map((eachPortada) => {
            return (
              <tr>
                <td>{eachPortada.descripcion}</td>
                <td>{eachPortada.precio}</td>
                <td>
                  <img className="imagen-pelicula" src={eachPortada.imagen} />
                </td>
                <td className="inventario-accion">
                  <figure className="iconos">
                    <Link to={`/editar_portada/${eachPortada._id}`}>
                      <img src="https://i.postimg.cc/8PtnSYzF/editar.png" />
                    </Link>
                    <Link onClick={event => HandleClick(event, eachPortada._id)} to="/inventarioPortada" >
                    <img src="https://i.postimg.cc/RVMb2m45/delete.png" />
                  </Link>
                  </figure>
                </td>

              </tr>
            );
          })}
        </table>
      </article>
      <Link className="link" to="/inventario">
        <button>Volver</button>
      </Link>
      <Link className="link" to="/nueva_portada">
        <button>Nueva Portada</button>
      </Link>
      <Link className="link" to="/">
        <button>Inicio</button>
      </Link>
    </main>
  );
};

export default InventarioPortada;
