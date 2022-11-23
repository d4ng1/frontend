import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import("../../styles/detalles.css");

const PopularDetalle = () => {
  const { pelicula_id } = useParams();
  const [pelicula, setPelicula] = useState({});
    useEffect(() => {
      
        fetch(`https://api.themoviedb.org/3/movie/${pelicula_id}?api_key=be0b80f4f5804aafe5c649f24d564175&language=es-US&page=1`)
        .then((response) => response.json())
        .then((pelicula) => setPelicula(pelicula))
        .catch((err) => console.log(err));
    }, []);

    return (
      <main className="main-pelicula">
        <img className="portada-pelicula" src={"https://image.tmdb.org/t/p/original/"+pelicula.backdrop_path}></img>
        <section className="section-pelicula">
          <h1>{pelicula.title}</h1>
          <article className="article-pelicula">
            <div className="imagen">
              <img className="imagen-peliculas" src={"https://image.tmdb.org/t/p/original/"+pelicula.poster_path} />
            </div>
            <div className="descripcion">

              <div className="text-pelicula">
                <h2>Sinopsis:</h2>
                <p className="sinopsis">{pelicula.overview}</p>
                <div className="tablas">
                  <table>
                    <tr>
                      <td>Popularidad:</td>
                      <td>{pelicula.popularity}</td>
                    </tr>
                    <tr>
                      <td>Estreno:</td>
                      <td>{pelicula.release_date}</td>
                    </tr>
                    <tr>
                      <td>Puntaje:</td>
                      <td>{pelicula.vote_average}</td>
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

  export default PopularDetalle;
