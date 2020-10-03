import React from 'react';
import FieldSet from './FieldSet';
import RadioButton from './RadioButton';
import CustomInput from './CustomInput';

const TileGeneratorConfig = ({
  colorInputs,
  updateColorInputs,
  patternType,
  updatePatternType,
  row,
  updateRow,
  column,
  updateColumn,
  shape,
  updateShapeType,
  scale,
  updateScale,
  tileHeight,
  updateTileHeight,
  tileWidth,
  updateTileWidth,
}) => {
  // maps out the color pickers
  let colorPickers = colorInputs.map((color, index) => {
    return (
      <CustomInput
        key={`color-${index}`}
        name="color-picker"
        type="color"
        value={color}
        onChange={(event) => updateColorValue(event, index)}
      >
        Colour
      </CustomInput>
    );
  });

  const updateColorValue = (event, index) => {
    let value = event.target.value;
    updateColorInputs((oldArray) => {
      const newArray = [...oldArray];
      newArray.splice(index, 1, value);
      return newArray;
    });
  };

  const addColorPicker = (event) => {
    updateColorInputs([...colorInputs, '#c4c4c4']);
  };

  const removeColorPicker = (event) => {
    if (colorInputs.length > 1) {
      updateColorInputs([...colorInputs].slice(0, -1));
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <main>
      <form onSubmit={submitHandler}>
        <FieldSet className="tile-generator_config_grid" title="Grid">
          <CustomInput
            name="row-input"
            value={row}
            type="number"
            onChange={(event) => updateRow(event.target.value)}
          >
            Rows
          </CustomInput>
          <CustomInput
            name="column-input"
            value={column}
            type="number"
            onChange={(event) => updateColumn(event.target.value)}
          >
            Columns
          </CustomInput>
        </FieldSet>
        <FieldSet className="tile-generator_config_color" title="Colour">
          <button type="button" onClick={addColorPicker}>
            +
          </button>
          <button type="button" onClick={removeColorPicker}>
            -
          </button>
          {colorPickers}
          <RadioButton
            className="generate-type"
            type="radio"
            value="randomise"
            checked={patternType === 'randomise'}
            onChange={(e) => updatePatternType(e.target.value)}
          >
            Randomise
          </RadioButton>
          <RadioButton
            patternType={patternType}
            updatePatternType={updatePatternType}
            className="generate-type"
            type="radio"
            value="not-adjacent"
            checked={patternType === 'not-adjacent'}
            onChange={(e) => updatePatternType(e.target.value)}
          >
            Non-adjacent
          </RadioButton>
        </FieldSet>
        <FieldSet className="tile-generator_config_shape" title="Tile Shape">
          <RadioButton
            type="radio"
            name="tile-type"
            className="tile-type"
            value="square"
            checked={shape === 'square'}
            onChange={(e) => updateShapeType(e.target.value)}
          >
            Square
          </RadioButton>
          <RadioButton
            type="radio"
            name="tile-type"
            className="tile-type"
            value="rectangle"
            checked={shape === 'rectangle'}
            onChange={(e) => updateShapeType(e.target.value)}
          >
            Rectangle
          </RadioButton>
          <CustomInput
            type="number"
            name="tile-height"
            className="tile-height"
            max="1200"
            step="10"
            value={tileHeight}
            onChange={(e) => updateTileHeight(e.target.value)}
          >Tile Height
          </CustomInput>
          {shape === "rectangle" ? <CustomInput
            type="number"
            name="tile-width"
            className="tile-width"
            max="1200"
            step="10"
            value={tileWidth}
            onChange={(e) => updateTileWidth(e.target.value)}
          >Tile Width
          </CustomInput> : null}
        </FieldSet>
        <FieldSet className="tile-generator_config_scale" title="Scale">
          <RadioButton
            type="radio"
            name="tile-scale"
            className="tile-scale"
            value="0"
            checked={scale === '0'}
            onChange={(e) => updateScale(e.target.value)}
          >
            default
          </RadioButton>
          <RadioButton
            type="radio"
            name="tile-scale"
            className="tile-scale"
            value="10"
            checked={scale === '10'}
            onChange={(e) => updateScale(e.target.value)}
          >
            1:10
          </RadioButton>
          <RadioButton
            type="radio"
            name="tile-scale"
            className="tile-scale"
            value="25"
            checked={scale === '25'}
            onChange={(e) => updateScale(e.target.value)}
          >
            1:25
          </RadioButton>
          <RadioButton
            type="radio"
            name="tile-scale"
            className="tile-scale"
            value="50"
            checked={scale === '50'}
            onChange={(e) => updateScale(e.target.value)}
          >
            1:50
          </RadioButton>
        </FieldSet>
        <button>Generate My Tiles</button>
      </form>
    </main >
  );
};

export default TileGeneratorConfig;
