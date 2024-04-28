import React, { useState } from 'react';

function App() {
  // Crear un estado llamado miTexto
  const [miTexto, setMiTexto] = useState('');

  // Crear función handleText
  const handleText = (event) => {
    // Tomar el valor de la caja de entrada
    const textoIngresado = event.target.value;
    // Actualizar el estado miTexto con el valor del texto ingresado
    setMiTexto(textoIngresado);
  };

  return (
    <div>
      <div>
        Capture su texto
      </div>
      <input onChange={handleText} />
      <h3>Su Texto</h3>
      <p>
        {miTexto}
      </p>
    </div>
  );
}

export default App;
