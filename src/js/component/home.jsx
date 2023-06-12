import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
export function Home() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const fechaActual = new Date();
      let ss = fechaActual.getSeconds() % 7; 
  
      setSegundos(ss);
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  

  return (
    <div className="contenedor-padre">
      <div className="contador">
        <div className="icono">
          <FontAwesomeIcon icon={faClock} />
        </div>
        <div className="tiempo">
          <span id="horas-primero">0</span>
          <span id="horas-segundo">0</span>
          <span id="minutos-primero">0</span>
          <span id="minutos-segundo">0</span>
          <span id="segundos-primero">0</span>
          <span className="digito" id="segundos-segundo">{segundos}</span>
        </div>
      </div>
    </div>
  );
}
