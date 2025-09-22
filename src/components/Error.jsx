const Error = ({ title, message }) => {
  return (
    <div className="error">
      <p>{title}</p>
      <p>{message}</p>
    </div>
  );
};

export default Error;
