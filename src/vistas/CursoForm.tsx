import React, { useState } from "react";
import GuardarButton from "../Compon/GuardarButton";
import LimpiarButton from "../Compon/LimpiarButton";
import ObtenerButton from "../Compon/ObtenerButton";

interface Curso {
  nombre: string;
  creditos: string;
  descripcion: string;
}

const CursoForm: React.FC = () => {
  const [curso, setCurso] = useState<Curso>({
    nombre: "",
    creditos: "",
    descripcion: "",
  });
  const [cursosGuardados, setCursosGuardados] = useState<Curso[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCurso({ ...curso, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://test-deploy-12.onrender.com/cursos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(curso),
        }
      );

      if (response.ok) {
        alert("Curso guardado exitosamente");
        setCurso({ nombre: "", creditos: "", descripcion: "" });
      } else {
        alert("Error al guardar el curso");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClear = () => {
    setCurso({ nombre: "", creditos: "", descripcion: "" });
  };

  const handleFetchCursos = async () => {
    try {
      const response = await fetch(
        "https://test-deploy-12.onrender.com/cursos"
      );
      if (response.ok) {
        const data = await response.json();
        setCursosGuardados(data); // Almacena los datos obtenidos
      } else {
        alert("Error al obtener los cursos");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="nombre">Nombre del curso:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={curso.nombre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="creditos">Créditos:</label>
          <input
            type="number"
            id="creditos"
            name="creditos"
            value={curso.creditos}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={curso.descripcion}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <GuardarButton onSubmit={handleSubmit} />
          <LimpiarButton onClear={handleClear} />
          <ObtenerButton onFetch={handleFetchCursos} />
        </div>
      </form>

      <h2>Cursos Guardados:</h2>
      <ul>
        {cursosGuardados.map((curso, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {curso.nombre} <br />
            <strong>Créditos:</strong> {curso.creditos} <br />
            <strong>Descripción:</strong> {curso.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CursoForm;
