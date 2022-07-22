const Error = ({ children }) => {
  return (
    <div className="p-3 mb-3 text-center text-white uppercase bg-red-700 rounded">
      <p>{children} </p>
    </div>
  );
};

export default Error;
