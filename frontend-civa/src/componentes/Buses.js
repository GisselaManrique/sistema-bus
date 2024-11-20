import React, { useState, useEffect } from "react";
import axios from "axios";

const Buses = () => {
  const [buses, setBuses] = useState([]);
  

  useEffect(() => {
    axios
      .get("http://localhost:8080/bus")
      .then((response) => {
        console.log(response.data); 
        setBuses(response.data);
      })
      .catch((error) => console.error("Error de conexion buses:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Buses</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Número de Bus</th>
            <th>Placa</th>
            <th>Marca</th>
            <th>Activo</th>
          </tr>
        </thead>
        <tbody>
          {buses.map((bus) => (
            <tr key={bus.idBus}>
              <td>{bus.idBus}</td>
              <td>{bus.numBus}</td>
              <td>{bus.placaBus}</td>
              <td>{bus.marcaBus?.nomBus || "No existe"}</td>
              <td>{bus.activoBus ? "Si" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Buses;
