import React from "react";
import RowTile from "./RowTile"

const TileGrid = ({
  colorInputs,
  patternType,
  row,
  column,
  shape,
  scale,
  tileHeight,
  tileWidth
}) => {
  let rowsArray = []
  let i = 0
  do {
    rowsArray.push(<RowTile
      key={"rowId" + i}
      rowNumber={"row" + i}
      tileHeight={tileHeight}
      tileWidth={tileWidth}
      colorInputs={colorInputs}
      column={column}
      shape={shape}
    />);
    i++;
  } while (i < 5)
  return (
    rowsArray
  )
}

export default TileGrid;