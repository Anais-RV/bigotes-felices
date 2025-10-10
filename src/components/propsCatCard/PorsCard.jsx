import React from 'react';
import data from "../../datos.json"
import { useState, useEffect } from "react";
import style from "../propsCatCard/ProsCard.module.css";


const Gatos = () => {
  const [gatos, setGatos] = useState([]);

  // Cargamos los datos del JSON
  useEffect(() => {
    setGatos(data);
  }, []);

  return (
    <div>
      <h1>Gatos</h1>

      {data.map( gato =>  (       
        <div key={gato.id} className="card">
          <h2>{gato.nombre}</h2>
          <p>Edad: {gato.edad} años</p>
          <p>Color: {gato.color}</p>
          <img className={style.img} src={gato.img} alt={`Foto de ${gato.nombre}`} />
        </div>
     ) 
       )
         }
    </div>
  );
};

export default Gatos;
