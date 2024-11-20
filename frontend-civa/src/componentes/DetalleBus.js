import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Buses = () => {
  const { id } = useParams(); 
  const [buses, setBuses] = useState([]); 
  const [selectedBus, setSelectedBus] = useState(null); 
  const [error, setError] = useState(null); // Manejo de errores

  useEffect(() => {
    // Cargar la lista completa de buses
    axios
      .get("http://localhost:8080/bus")
      .then((response) => {
        setBuses(response.data);
      })
      .catch((error) => console.error("Error de conexion buses:", error));
  }, []);

  useEffect(() => {
    // Cargar los detalles del bus si hay un ID en la URL
    if (id) {
      axios
        .get(`http://localhost:8080/bus/${id}`)
        .then((response) => {
          setSelectedBus(response.data); // Guardar el bus encontrado
          setError(null); 
        })
        .catch((error) => {
          console.error("Error al buscar ID:", error);
          setError("No se encontró el bus con el ID proporcionado.");
          setSelectedBus(null); // Limpiar datos 
        });
    }
  }, [id]);

  return (
    <div>
      
     <h1>Lista de Buses</h1>

      <table border="1" style={{ marginTop: "20px" }}>
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
              <td>{bus.activoBus ? "S" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {id && (
        <div style={{ marginTop: "20px", border: "1px solid #000", padding: "10px" }}>
          <h2>Detalles del Bus</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {selectedBus && (
            <>
              <p><strong>ID:</strong> {selectedBus.idBus}</p>
              <p><strong>Número de Bus:</strong> {selectedBus.numBus}</p>
              <p><strong>Placa:</strong> {selectedBus.placaBus}</p>
              <p><strong>Fecha de Creación:</strong> {new Date(selectedBus.fechaCreacionBus).toLocaleString()}</p>
              <p><strong>Características:</strong> {selectedBus.carctBus}</p>
              <p><strong>Marca:</strong> {selectedBus.marcaBus?.nomBus || "Sin marca"}</p>
              <p><strong>Activo:</strong> {selectedBus.activoBus ? "Sí" : "No"}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Buses;
