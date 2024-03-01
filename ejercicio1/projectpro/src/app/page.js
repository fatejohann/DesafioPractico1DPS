"use client";
import { useState } from "react";

import { RegistroProyecto } from "@/components/RegistroProyecto";
import { Categorizacion } from "@/components/Categorizacion";
import { VisualizacionProyectos } from "@/components/VisualizacionProyectos";

export default function Home() {
  const [proyectos, setProyectos] = useState([]);
  const [totalProyectosAmbientales, setTotalProyectosAmbientales] = useState(0);
  const [totalProyectosNoAmbientales, setTotalProyectosNoAmbientales] = useState(0);

  const handleRegistroProyecto = (nuevoProyecto) => {
    setProyectos([...proyectos, nuevoProyecto]);

    // Calcular totales de proyectos ambientales y no ambientales
    if (nuevoProyecto.tipo === 'ambiental') {
      setTotalProyectosAmbientales(totalProyectosAmbientales + nuevoProyecto.inversion);
    } else {
      setTotalProyectosNoAmbientales(totalProyectosNoAmbientales + nuevoProyecto.inversion);
    }
  };

  return (
    <>
      <RegistroProyecto onRegistroProyecto={handleRegistroProyecto} />
      <Categorizacion proyectos={proyectos} />
      <VisualizacionProyectos
        proyectos={proyectos}
        totalProyectosAmbientales={totalProyectosAmbientales}
        totalProyectosNoAmbientales={totalProyectosNoAmbientales}
      />
    </>
  );
}
