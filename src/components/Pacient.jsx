const Pacient = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  // creo función de eliminar paciente con Pop Up Nativo de browser.
  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente?");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="px-5 py-4 m-3 bg-white shadow-md rounded-xl">
      <p className="mb-3 font-bold text-gray-700">
        ID: <span className="font-normal normal-case">{id}</span>
      </p>
      <p className="mb-3 font-bold text-gray-700">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="mb-3 font-bold text-gray-700">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="mb-3 font-bold text-gray-700">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="mb-3 font-bold text-gray-700">
        Fecha de Alta: <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="mb-3 font-bold text-gray-700">
        Sintpomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex mt-5">
        <button
          className="px-10 py-2 mr-5 text-white uppercase bg-indigo-600 rounded-lg hover:bg-indigo-700"
          type="button"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          className="px-10 py-2 text-white uppercase bg-red-600 rounded-lg hover:bg-red-700"
          type="button"
          onClick={handleEliminar}
        >
          {" "}
          Eliminar{" "}
        </button>
      </div>
    </div>
  );
};

export default Pacient;
