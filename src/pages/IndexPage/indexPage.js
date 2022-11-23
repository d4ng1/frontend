import Portada from "./portada";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import("../../styles/index.css");

const IndexPage = () => {
  
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(
      'http://localhost:5005/api/peliculas'
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

  return (
    <main>
      <Portada/>
      <section className="section-index">
        {peliculas.map((eachPeliculas) => {
          return (
            <article className="peliculas-card">
              <Link className="link" to={`/detalle/${eachPeliculas._id}`}>
                <div className="mas">
                  <img
                    className="mas-img"
                    src="https://i.postimg.cc/PfyBpTWp/mas.png"
                  />
                </div>
              </Link>
              <h3>{eachPeliculas.nombre}</h3>
              <img src={eachPeliculas.imagen} />
              <h4>{eachPeliculas.hora_inicio}</h4>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default IndexPage;
