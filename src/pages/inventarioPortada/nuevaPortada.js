import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import swal from "sweetalert";

const NuevaPortada = () => {
  //Hooks
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');

  const action = () => {
    nuevaPortada()
    window.location = './inventarioPortada';

  }

  const nuevaPortada = () => {
    var portada = {
      descripcion: descripcion,
      precio: precio,
      imagen: imagen
    }
    axios.post('/api/portada/nueva_portada', portada)
      .then(res => {
        // swal(res.data)
      })
      .then(err => { console.log(err) })
  };
  return (
    <main>
      <hr />
      <article className="login-card">
        <h3>Nuevo</h3>
        <div className="login">
          <div className="input-label">
            <label>Descripcion:</label>
            <input
              id="descripcion"
              type="text"
              placeholder="descripcion..."
              value={descripcion} onChange={(e) => { setDescripcion(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>precio:</label>
            <input
              id="precio"
              type="text"
              placeholder="precio..." value={precio} onChange={(e) => { setPrecio(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Imagen:</label>
            <input
              id="imagen"
              type="text"
              placeholder="URL de la imagen..." value={imagen} onChange={(e) => { setImagen(e.target.value) }}
              required
            ></input>
          </div>
          <Link to="/inventarioPortada">
            <button onClick={action}>
              Crear
            </button>
          </Link>
        </div>
      </article>
    </main>
  );
};

export default NuevaPortada;
