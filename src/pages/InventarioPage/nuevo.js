import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import swal from "sweetalert";

const Nuevo = () => {
  //Hooks
  const [nombre, setNombre] = useState('');
  const [tarifa, setTarifa] = useState('');
  const [hora_inicio, setHora_inicio] = useState('');
  const [idioma, setIdioma] = useState('');
  const [tipo, setTipo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [restriccion, setRestriccion] = useState('');
  const [imagen, setImagen] = useState('');
  const [trailer, setTrailer] = useState('');
  const [sinopsis, setSinopsis] = useState('');
  const [portada, setPortada] = useState('');

  const action = () => {
    nuevaPelicula()
    window.location = './inventario';

  }

  const nuevaPelicula = () => {
    var peliculass = {
      nombre: nombre,
      tarifa: tarifa,
      hora_inicio: hora_inicio,
      idioma: idioma,
      tipo: tipo,
      categoria: categoria,
      restriccion: restriccion,
      imagen: imagen,
      trailer: trailer,
      sinopsis: sinopsis,
      portada: portada
    }
    axios.post('/api/peliculas/nueva_pelicula', peliculass)
      .then(res => {
        // swal(res.data)
      })
      .then(err => { console.log(err) })
  };
  return (
    <main>
      <h1>{nombre} </h1>
      <hr />
      <article className="login-card">
        <h3>Nuevo</h3>
        <div className="login">
          <div className="input-label">
            <label>Nombre:</label>
            <input
              id="nombre"
              type="text"
              placeholder="Nombre..."
              value={nombre} onChange={(e) => { setNombre(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Tarifa:</label>
            <input
              id="tarifa"
              type="text"
              placeholder="Tarifa..." value={tarifa} onChange={(e) => { setTarifa(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Hora de inicio:</label>
            <input
              id="hora_inicio"
              type="text"
              placeholder="Hora de inicio..." value={hora_inicio} onChange={(e) => { setHora_inicio(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Idioma:</label>
            <input
              id="idioma"
              type="text"
              placeholder="Idioma..." value={idioma} onChange={(e) => { setIdioma(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Tipo:</label>
            <input id="tipo" type="text" placeholder="Tipo..." value={tipo} onChange={(e) => { setTipo(e.target.value) }} required></input>
          </div>
          <div className="input-label">
            <label>Categoria:</label>
            <input
              id="categoria"
              type="text"
              placeholder="Categoria..." value={categoria} onChange={(e) => { setCategoria(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Restriccion:</label>
            <input
              id="restriccion"
              type="text"
              placeholder="Restriccion..." value={restriccion} onChange={(e) => { setRestriccion(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Imagen:</label>
            <input
              id="imagen"
              type="text"
              placeholder="Imagen..." value={imagen} onChange={(e) => { setImagen(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Trailer:</label>
            <input
              id="trailer"
              type="text"
              placeholder="Trailer..." value={trailer} onChange={(e) => { setTrailer(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Sinopsis:</label>
            <input
              id="sinopsis"
              type="text"
              placeholder="Sinopsis..." value={sinopsis} onChange={(e) => { setSinopsis(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Portada:</label>
            <input
              id="portada"
              type="text"
              placeholder="Portada..." value={portada} onChange={(e) => { setPortada(e.target.value) }}
              required
            ></input>
          </div>
          <Link to="/inventario">
            <button onClick={action}>
              Crear
            </button>
          </Link>
          <Link to="/inventario">
            <button>
              Volver
            </button>
          </Link>
        </div>
      </article>
    </main>
  );
};

export default Nuevo;
