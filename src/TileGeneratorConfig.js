import React from 'react';
import FieldSet from './FieldSet';
import TextInput from './TextInput';

const TileGeneratorConfig = ({ colorInputs, updateColorInputs }) => {
  // maps out the color pickers
  let colorPickers = colorInputs.map((color, index) => {
    return (
      <TextInput
        key={`color-${index}`}
        name="color-picker"
        type="color"
        value={color}
        onChange={(event) => updateColorValue(event, index)}
      >
        Colour
      </TextInput>
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
  return (
    <main>
      <form>
        {/* <FieldSet className="tile-generator_config_grid" title="Grid">
          <TextInput name="row-input" value="10" type="number">
            Rows
          </TextInput>
          <TextInput name="column-input" value="5" type="number">
            Columns
          </TextInput>
        </FieldSet> */}
        <FieldSet className="tile-generator_config_color" title="Colour">
          <button type="button" onClick={addColorPicker}>
            +
          </button>
          <button type="button" onClick={removeColorPicker}>
            -
          </button>
          {colorPickers}
        </FieldSet>
      </form>
    </main>
  );
};

export default TileGeneratorConfig;
