import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Editar = () => {

  var [nombre, setNombre] = useState('');
  var [tarifa, setTarifa] = useState('');
  var [hora_inicio, setHora_inicio] = useState('');
  var [idioma, setIdioma] = useState('');
  var [tipo, setTipo] = useState('');
  var [categoria, setCategoria] = useState('');
  var [restriccion, setRestriccion] = useState('');
  var [imagen, setImagen] = useState('');
  var [trailer, setTrailer] = useState('');
  var [sinopsis, setSinopsis] = useState('');
  var [portada, setPortada] = useState('');

  const { pelicula_id } = useParams();
  const [pelicula, setPelicula] = useState({});

  const idPeliculas = () => {

    fetch(`https://backendmern-g7.azurewebsites.net/api/peliculas/${pelicula_id}`)
      .then((res) => res.json())
      .then((pelicula) => {
        setPelicula(pelicula)
      });
  };

  useEffect(() => {
    idPeliculas();
  }, []);

  async function saveMovie() {

    var peliculaObtenida = {
      nombre: document.getElementById('nombre').value,
      tarifa: document.getElementById('tarifa').value,
      hora_inicio: document.getElementById('hora_inicio').value,
      idioma: document.getElementById('idioma').value,
      tipo: document.getElementById('tipo').value,
      categoria: document.getElementById('categoria').value,
      restriccion: document.getElementById('restriccion').value,
      imagen: document.getElementById('imagen').value,
      trailer: document.getElementById('trailer').value,
      sinopsis: document.getElementById('sinopsis').value,
      portada: document.getElementById('portada').value
    }

    if (window.confirm('Desea guardar los cambios?')) {
      await axios.put(`https://backendmern-g7.azurewebsites.net/api/peliculas/${pelicula_id}`, peliculaObtenida).then(res => {
        console.log(" response: ", res)
      }).catch((error) => {
        console.log("error : ", error)
      });

      window.location = './inventario';

    }

  }

  return (
    <main>
      <h1>{pelicula.nombre} </h1>
      <hr />
      <article className="login-card">
        <h3>Editar</h3>
        <div className="login">
          <div className="input-label">
            <label>Nombre:</label>
            <input
              id="nombre"
              type="text"
              placeholder="Ingrese el nombre"
              defaultValue={pelicula.nombre} onChange={(e) => { setNombre(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Tarifa:</label>
            <input
              id="tarifa"
              type="text"
              placeholder="Ingrese la Tarifa"
              defaultValue={pelicula.tarifa} onChange={(e) => { setTarifa(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Hora de inicio:</label>
            <input
              id="hora_inicio"
              type="text"
              placeholder="Ingrese la hora inicio"
              defaultValue={pelicula.hora_inicio} onChange={(e) => { setHora_inicio(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>idioma:</label>
            <input
              id="idioma"
              type="text"
              placeholder="Ingrese el idioma"
              defaultValue={pelicula.idioma} onChange={(e) => { setIdioma(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Tipo:</label>
            <input
              id="tipo"
              type="text"
              placeholder="Ingrese el Tipo"
              defaultValue={pelicula.tipo} onChange={(e) => { setTipo(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Categoria:</label>
            <input
              id="categoria"
              type="text"
              placeholder="Ingrese la Categoria"
              defaultValue={pelicula.categoria} onChange={(e) => { setCategoria(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Restriccion:</label>
            <input
              id="restriccion"
              type="text"
              placeholder="Ingrese la restriccion"
              defaultValue={pelicula.restriccion} onChange={(e) => { setRestriccion(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Imagen:</label>
            <input
              id="imagen"
              type="text"
              placeholder="Ingrese el link de la imagen"
              defaultValue={pelicula.imagen} onChange={(e) => { setImagen(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Trailer:</label>
            <input
              id="trailer"
              type="text"
              placeholder="Ingrese el link del trailer"
              defaultValue={pelicula.trailer} onChange={(e) => { setTrailer(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Sinopsis:</label>
            <input
              id="sinopsis"
              type="text"
              placeholder="Ingrese la sipnosis"
              defaultValue={pelicula.sinopsis} onChange={(e) => { setSinopsis(e.target.value) }}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Portada:</label>
            <input
              id="portada"
              type="text"
              placeholder="Ingrese el link de la portada"
              defaultValue={pelicula.portada} onChange={(e) => { setPortada(e.target.value) }}
              required
            ></input>
          </div>

          <Link to="/inventario">
            <button onClick={saveMovie} >Guardar</button>
          </Link>

        </div>
      </article>
    </main>
  );
};

export default Editar;
