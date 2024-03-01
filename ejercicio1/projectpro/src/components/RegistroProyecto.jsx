import React, { useState } from 'react';
import projectsData from '../data/projectsData';

export const RegistroProyecto = () => {
  const [proyecto, setProyecto] = useState({
    tipo: '',
    inversion: 0,
    fechaInicio: '',
    descripcion: '',
    categoria: '',
  });

  const handleInputChange = (e) => {
    setProyecto({ ...proyecto, [e.target.name]: e.target.value });
  };

  const handleRegistro = () => {
    if (proyecto.tipo === '' || proyecto.categoria === '') {
      console.error('Tipo de proyecto y categoría son campos obligatorios');
      return;
    }

    // Guardar el proyecto en el arreglo correspondiente según el tipo
    if (proyecto.tipo === 'ambient') {
      projectsData.ambient.push(proyecto);
    } else if (proyecto.tipo === 'nonAmbient') {
      projectsData.nonAmbient.push(proyecto);
    }

    // Resto de la lógica para resetear campos o realizar otras acciones después del registro
    setProyecto({
      tipo: '',
      inversion: 0,
      fechaInicio: '',
      descripcion: '',
      categoria: '',
    });
  };

  return (
    <div className="form-container">
      <h2>Presupuesto Proyectos</h2>
      <form>
        <label>Tipo de Proyecto:</label>
        <select name="tipo" value={proyecto.tipo} onChange={handleInputChange}>
          <option value="">Seleccionar tipo</option>
          <option value="ambient">Ambiental</option>
          <option value="nonAmbient">No Ambiental</option>
        </select>

        <label>Inversión:</label>
        <input
          type="number"
          name="inversion"
          value={proyecto.inversion}
          onChange={handleInputChange}
        />

        <label>Fecha de Inicio:</label>
        <input
          type="date"
          name="fechaInicio"
          value={proyecto.fechaInicio}
          onChange={handleInputChange}
        />

        <label>Descripción:</label>
        <textarea
          name="descripcion"
          value={proyecto.descripcion}
          onChange={handleInputChange}
        ></textarea>
        <button type="button" onClick={handleRegistro}>
          Registrar Proyecto
        </button>
      </form>
    </div>
  );
};
