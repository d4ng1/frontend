import { useState, useEffect } from "react";

import("../../styles/index.css");
import("../../styles/portada.css");

const Portada = () => {

  const [portada, setPortada] = useState([]);

  useEffect(() => {
    fetch(
      'https://backendmern-g7.azurewebsites.net/api/portada'
    )
      .then((res) => res.json())
      .then((Protada) => {
        showPortada(Protada);
      })
      .catch((err) => console.log(err));
  }, []);

  function showPortada(portada) {
    setPortada(portada)
    console.log("portada: ", portada)
  }
  

  return (
    <main>
      <h1>Bienvenido!</h1>
      <section className="section-portada">
        {portada.map((eachPortada) => {
          return (
            <article className="portada-card">
              <img className="portada-img" src={eachPortada.imagen} />
              <h3 className="portada-descripcion">{eachPortada.descripcion}</h3>
              <h4 className="portada-precio">$ {eachPortada.precio}</h4>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Portada;
