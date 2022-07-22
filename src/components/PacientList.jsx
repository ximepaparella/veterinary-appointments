import Pacient from "./Pacient";

const PacientList = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className=" md:w-1/2 lg:w-3/5">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="text-3xl font-black text-center">
            Lista de Pacientes
          </h2>
          <p className="mt-5 mb-10 text-xl text-center">
            Administra tus{" "}
            <span className="font-bold text-indigo-600">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Pacient
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="text-3xl font-black text-center">No hay pacientes</h2>
          <p className="mt-5 mb-10 text-xl text-center">
            Comienza agregando pacientes {""}
            <span className="font-bold text-indigo-600">
              y apareceran en este lugar.
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default PacientList;
