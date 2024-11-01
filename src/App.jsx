import "./App.css";
import Cuadro from "./components/form";

function App() {
  const alerta = () => {
    alert(
      "LOS DATOS GUARDADOS DEPENDEN DE CADA NAVEGADOR Y SOLO SE GUARDAN LOCALMENTE"
    );
  };

  return (
    <>
      <form className="container">
        <Cuadro space={1} />
        <Cuadro space={2} />
        <Cuadro space={3} />
        <Cuadro space={4} />
        <Cuadro space={5} />
        <Cuadro space={6} />
        <Cuadro space={7} />
        <Cuadro space={8} />
        <button className="button" onClick={alerta}>
          Información
        </button>
      </form>
    </>
  );
}

export default App;
