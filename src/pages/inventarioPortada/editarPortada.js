import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const EditarPortada = () => {

  var [descripcion, setDescripcion] = useState('');
  var [precio, setPrecio] = useState('');
  var [imagen, setImagen] = useState('');

  const { portada_id } = useParams();
  const [portada, setPortada] = useState({});

  const idPortadas = () => {

    fetch(`https://backendmern-g7.azurewebsites.net/api/portada/${portada_id}`)
      .then((res) => res.json())
      .then((portada) => {
        setPortada(portada)
      });
  };

  useEffect(() => {
    idPortadas();
  }, []);

  async function savePortada() {

    var portadaObtenida = {
      descripcion: document.getElementById('descripcion').value,
      precio: document.getElementById('precio').value,
      imagen: document.getElementById('imagen').value
    }

    if (window.confirm('Desea guardar los cambios?')) {
      await axios.put(`https://backendmern-g7.azurewebsites.net/api/portada/${portada_id}`, portadaObtenida).then(res => {
        console.log(" response: ", res)
      }).catch((error) => {
        console.log("error : ", error)
      });
      window.location = './inventarioPortada';

    }

  }

  return (
    <main>
      <hr />
      <article className="login-card">
        <h3>Editar</h3>
        <div className="login">
          <div className="input-label">
            <label>Descripcion:</label>
            <input
              id="descripcion"
              type="text"
              placeholder="Ingrese la descripcion"
              defaultValue={portada.descripcion} onChange={(e) => { setDescripcion(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>precio:</label>
            <input
              id="precio"
              type="text"
              placeholder="Ingrese el precio"
              defaultValue={portada.precio} onChange={(e) => { setPrecio(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>URL de la imagen:</label>
            <input
              id="imagen"
              type="text"
              placeholder="Ingrese la URL de la imagen"
              defaultValue={portada.imagen} onChange={(e) => { setImagen(e.target.value) }}
              required
            ></input>
          </div>

          <Link to="/inventario">
            <button onClick={savePortada} >Guardar</button>
          </Link>

        </div>
      </article>
    </main>
  );
};

export default EditarPortada;
