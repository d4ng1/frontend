import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import("../../styles/index.css");


const Populares = () => {
  
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=be0b80f4f5804aafe5c649f24d564175&language=es-US&page=1'
      )
        .then((res) => res.json())
        .then((item) => {
          console.log(item.results);
          showMovies(item.results);
        })
        .catch((err) => console.log(err))
  },[]);

  function showMovies(movies) {
    setPeliculas(movies)
    console.log("popular movies: ",movies)
  }

  return (
    <main>
      <h1>Peliculas más populares</h1>
      <section className="section-index">
        {peliculas.map((pelicula) => {
          return (
            <article className="peliculas-card">
              <Link className="link" to={`/popular_detalle/${pelicula.id}`}>
                <div className="mas">
                  <img
                    className="mas-img"
                    src="https://i.postimg.cc/PfyBpTWp/mas.png"
                  />
                </div>
              </Link>
              <h3>{pelicula.title}</h3>
              <img src={"https://image.tmdb.org/t/p/original/"+pelicula.poster_path} />
              <h4>Promedio votado: {pelicula.vote_average}</h4>
              <h4>Votado: {pelicula.vote_count}</h4>
              <h4>Popularidad: {pelicula.popularity}</h4>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Populares;
