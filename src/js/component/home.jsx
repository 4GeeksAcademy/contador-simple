import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";


export function Home() {

  const [time,setTime] = useState(0);
  const [running,setRunning] = useState(false);
  const [timeString,setTimeString] = useState([]);
console.log("Al principio de ejecutar la lógia :", time, running, timeString)
  useEffect(() =>{

    let interval;
    if(running){
      interval = setInterval(() =>{
        setTime((counter) => counter + 1)
      }, 1000)

    }else if(!running){
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  },[running])

  useEffect(() =>{
   setRunning(true)
  },[])

  useEffect(() =>{
   setTimeString(time.toString().split('').reverse());
  },[time])
  

  return (
    <div className="contenedor-padre">
      <div className="contador">
        <div className="icono">
          <FontAwesomeIcon icon={faClock} />
        </div>
        <div className="tiempo">
          <span className="billones">{timeString[5]}</span>
          <span className="millones">{timeString[4]}</span>
          <span className="millares">{timeString[3]}</span>
          <span className="centenas">{timeString[2]}</span>
          <span className="decenas">{timeString[1]}</span>
          <span className="digito unidades-unidades">{timeString[0]}</span>
        </div>
      </div>
    </div>
  );
}
