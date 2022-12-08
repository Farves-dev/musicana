import "../styles/main.scss";

const Loader = ({ title }) => (
  <div className="loader-container">
    <div className="loader-img" />
    <h1 className="loader-text">{title || "Loading"}</h1>
  </div>
);

export default Loader;
