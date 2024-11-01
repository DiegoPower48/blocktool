import React, { useEffect, useState } from "react";

export default function Cuadro({ space }) {
  const [data, setData] = useState("");

  const enviarDatos = async (id, texto) => {
    const datos = {
      id: id,
      texto: texto,
    };
    const array = JSON.stringify(datos);
    localStorage.setItem(`carga${space}`, array);
  };

  const handle = (event) => {
    const newValue = event.target.value;
    setData(newValue);
    enviarDatos(space, newValue);
  };

  useEffect(() => {
    try {
      const local = localStorage.getItem(`carga${space}`);
      const datos = JSON.parse(local);
      console.log(datos);
      setData(datos.texto);
    } catch {
      localStorage.setItem(`carga${space}`, "");
    }
  }, []);

  return (
    <textarea
      className="cajitaxd"
      spellCheck="false"
      value={data}
      onChange={handle}
    ></textarea>
  );
}
