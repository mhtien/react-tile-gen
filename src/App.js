import React from 'react';
import './App.css';
import Header from './Header';
import TileGeneratorConfig from './TileGeneratorConfig';

function App() {
  const [colorInputs, updateColorInputs] = React.useState([
    '#dee2ff',
    '#8e9aaf',
    '#efd3d7',
  ]);

  return (
    <>
      <Header>Tile Generator</Header>
      <TileGeneratorConfig
        colorInputs={colorInputs}
        updateColorInputs={updateColorInputs}
      ></TileGeneratorConfig>
    </>
  );
}

export default App;
