import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import PacientList from "./components/PacientList";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  //Consulto si hay algo en local storage y lo seteo en pacientes para que no se reinicie el State []
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes"));
      setPacientes(pacientesLS);
    };
    obtenerLS();
  }, []);

  // Guardo en local Storage cuando pacientes cambia.
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  // genero la función de eliminar paciente por ID
  const eliminarPaciente = (id) => {
    // filtro el paciente con el ID que recibo
    const pacientesActualizados = pacientes.filter(
      // devuelvo todos los que son distintos al ID que quiero eliminar.
      (paciente) => paciente.id !== id
    );
    // vuelvo a setear pacientes con el listado actualizado
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container pt-20 mx-auto">
      <Header />
      <section className="mt-12 md:flex">
        <Form
          pacientes={pacientes}
          paciente={paciente}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
        />
        <PacientList
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </section>
    </div>
  );
}

export default App;
