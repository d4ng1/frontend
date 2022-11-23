import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import("../../styles/detalles.css");

const PeliculaDetalle = () => {
  const { pelicula_id } = useParams();
  const [pelicula, setPelicula] = useState({});
    useEffect(() => {
      fetch(`http://localhost:5005/api/peliculas/${pelicula_id}`)
        .then((response) => response.json())
        .then((pelicula) => setPelicula(pelicula))
        .catch((err) => console.log(err));
    }, []);

    return (
      <main className="main-pelicula">
        <img className="portada-pelicula" src={pelicula.portada}></img>
        <section className="section-pelicula">
          <h1>{pelicula.nombre}</h1>
          <article className="article-pelicula">
            <div className="imagen">
              <img className="imagen-peliculas" src={pelicula.imagen} />
            </div>
            <div className="descripcion">
              <iframe
                className="trailer"
                src={`https://www.youtube.com/embed/${pelicula.trailer}`}
                title="YouTube video player"
                frameborder="0"

              ></iframe>
              <div className="text-pelicula">
                <h2>Sinopsis:</h2>
                <p className="sinopsis">{pelicula.sinopsis}</p>
                <div className="tablas">
                  <table>
                    <tr>
                      <td>Tarifa:</td>
                      <td>{pelicula.tarifa}</td>
                    </tr>
                    <tr>
                      <td>Idioma:</td>
                      <td>{pelicula.idioma}</td>
                    </tr>

                    <tr>
                      <td>Hora de inicio:</td>
                      <td>{pelicula.hora_inicio}</td>
                    </tr>
                  </table>
                  <table>
                    <tr>
                      <td>Tipo:</td>
                      <td>{pelicula.tipo}</td>
                    </tr>
                    <tr>
                      <td>Categoria:</td>
                      <td>{pelicula.categoria}</td>
                    </tr>
                    <tr>
                      <td>Restricciones:</td>
                      <td>{pelicula.restriccion}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </article>
        </section>
        <hr />
      </main>
    );
  };

  export default PeliculaDetalle;
