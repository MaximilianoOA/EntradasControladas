import React, { useState } from 'react';

function App() {
  const [miTexto, setMiTexto] = useState('');

  const handleText = (event) => {
    const textoIngresado = event.target.value;
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
