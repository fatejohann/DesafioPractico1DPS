import React from 'react';
import projectsData from '../data/projectsData';

export const VisualizacionProyectos = ({ totalProyectosAmbientales, totalProyectosNoAmbientales }) => {
  // Lógica para mostrar resumen y cifras precisas

  return (
    <div>
      <h2>Visualización de Proyectos</h2>
      <p>Total Proyectos Ambientales: ${totalProyectosAmbientales}</p>
      <p>Total Proyectos No Ambientales: ${totalProyectosNoAmbientales}</p>

      <div>
        <h3>Detalles de Proyectos Ambientales</h3>
        {projectsData.ambient.length > 0 ? (
          projectsData.ambient.map((proyecto) => (
            <div key={proyecto.id} className="proyecto-detalle">
              <h4>{proyecto.nombre}</h4>
              <p><strong>Categoría:</strong> {proyecto.categoria}</p>
              <p><strong>Fecha de Inicio:</strong> {proyecto.fechaInicio}</p>
              <p><strong>Inversión:</strong> ${proyecto.inversion}</p>
              <p><strong>Descripción:</strong> {proyecto.descripcion}</p>
            </div>
          ))
        ) : (
          <p>No hay proyectos ambientales para mostrar</p>
        )}
      </div>

      <div>
        <h3>Detalles de Proyectos No Ambientales</h3>
        {projectsData.nonAmbient.length > 0 ? (
          projectsData.nonAmbient.map((proyecto) => (
            <div key={proyecto.id} className="proyecto-detalle">
              <h4>{proyecto.nombre}</h4>
              <p><strong>Categoría:</strong> {proyecto.categoria}</p>
              <p><strong>Fecha de Inicio:</strong> {proyecto.fechaInicio}</p>
              <p><strong>Inversión:</strong> ${proyecto.inversion}</p>
              <p><strong>Descripción:</strong> {proyecto.descripcion}</p>
              {/* Puedes agregar más detalles según las propiedades de tus proyectos */}
            </div>
          ))
        ) : (
          <p>No hay proyectos no ambientales para mostrar</p>
        )}
      </div>
    </div>
  );
};
