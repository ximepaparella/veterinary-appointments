import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  // Genero un ID basado en la fecha y un numero random
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return fecha + random;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    //Objeto de paciente para llenar el array
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      // si el paciente existe lo edito
      objetoPaciente.id = paciente.id;

      // chequeo que el paciente que estoy actualizando coincida con el ID del que quiero actualizar.
      //Caso que si, devuelvo objetoPaciente (instancia actualizada) caso contrario pacienteState (instancia desactualizada del State)
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );
      // guardo los pacientes actualizados.
      setPacientes(pacientesActualizados);

      //limpio el formulario
      setPaciente({});
    } else {
      // si el paciente no existe lo creo
      // le asigno un ID y lo sumo al array
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    // Reiniciar Form
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="ml-3 mr-3 md:w-1/2 lg:w-2/5">
      <h2 className="text-3xl font-black text-center">Seguimiento pacientes</h2>
      <p className="mt-5 mb-10 text-lg text-center">
        Añade pacientes
        <span className="font-bold text-indigo-600 "> Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="px-5 py-10 mb-10 bg-white rounded-lg shadow-sm "
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios </p>
          </Error>
        )}
        <div className="mt-5">
          <label htmlFor="mascota" className="block font-bold text-gray-700">
            Nombre de la mascota:
          </label>
          <input
            id="mascota"
            className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="propietario"
            className="block font-bold text-gray-700"
          >
            Nombre del propietario:
          </label>
          <input
            id="propietario"
            className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
            type="text"
            placeholder="Nombre del Propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="email" className="block font-bold text-gray-700">
            Email:
          </label>
          <input
            id="email"
            className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
            type="email"
            placeholder="Ingrese su e-mail de contacto"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="alta" className="block font-bold text-gray-700">
            Fecha de Alta:
          </label>
          <input
            id="alta"
            className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="sintomas" className="block font-bold text-gray-700">
            Sintomas:
          </label>
          <textarea
            id="sintomas"
            className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="w-full p-3 mt-5 font-bold text-white transition-all bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700"
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Form;
