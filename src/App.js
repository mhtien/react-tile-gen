import React from 'react';
import './App.css';
import Header from './Header';
import TileGeneratorConfig from './TileGeneratorConfig';
import TileGrid from "./TileGrid"

function App() {
  const [colorInputs, updateColorInputs] = React.useState([
    '#dee2ff',
    '#8e9aaf',
    '#efd3d7',
  ]);
  const [patternType, updatePatternType] = React.useState('randomise');
  const [shape, updateShapeType] = React.useState('square');
  const [row, updateRow] = React.useState('10');
  const [column, updateColumn] = React.useState('5');
  const [scale, updateScale] = React.useState('0');
  const [tileHeight, updateTileHeight] = React.useState("20");
  const [tileWidth, updateTileWidth] = React.useState("20");

  return (
    <>
      <Header>Tile Generator</Header>
      <TileGeneratorConfig
        colorInputs={colorInputs}
        updateColorInputs={updateColorInputs}
        patternType={patternType}
        updatePatternType={updatePatternType}
        row={row}
        updateRow={updateRow}
        column={column}
        updateColumn={updateColumn}
        shape={shape}
        updateShapeType={updateShapeType}
        scale={scale}
        updateScale={updateScale}
        tileHeight={tileHeight}
        updateTileHeight={updateTileHeight}
        tileWidth={tileWidth}
        updateTileWidth={updateTileWidth}
      ></TileGeneratorConfig>
      <TileGrid
        colorInputs={colorInputs}
        patternType={patternType}
        row={row}
        column={column}
        shape={shape}
        scale={scale}
        tileHeight={tileHeight}
        tileWidth={tileWidth}
      />
    </>
  )
}
export default App;
