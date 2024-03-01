import React, { useState } from 'react';
import projectsData from '../data/projectsData';

export const Categorizacion = () => {
  const [categoria, setCategoria] = useState('');

  const handleAsignarCategoria = () => {
    if (categoria === '') {
      console.error('Categoría es un campo obligatorio');
      return;
    }
  // Lógica para asignar la categoría a los proyectos ambientales y no ambientales
  projectsData.ambient.forEach((proyecto) => (proyecto.categoria = categoria));
  projectsData.nonAmbient.forEach((proyecto) => (proyecto.categoria = categoria));
  
    // Puedes realizar otras acciones aquí, como enviar los datos actualizados al servidor
    console.log(`Categoría asignada a todos los proyectos: ${categoria}`);
  
    // Limpiar el estado de la categoría después de asignarla
    setCategoria('');
    // Puedes también actualizar el estado de 'proyectos' con las categorías asignadas
    // setProyectos(proyectosConCategorias);
  };

  return (
    <div className="form-container">
      <h2>Asignar Categorías</h2>
      <label>Seleccionar Categoría:</label>
      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="">Seleccionar categoría</option>
        <option value="desarrolloMultimedia">Desarrollo Multimedia</option>
        <option value="desarrolloSoftware">Desarrollo de Software</option>
        <option value="construccionInfraestructura">Construcción de Infraestructura</option>
      </select>
      <button onClick={handleAsignarCategoria}>Asignar Categoría</button>
    </div>
  );
};