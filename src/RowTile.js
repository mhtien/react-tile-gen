import React from "react";
import styled from "styled-components"

const TileDiv = styled.div`
  display:inline-block;
  border: 1px solid green;
  height: ${props => props.tileHeight};
  width: ${props => props.updateWidth};
  background-color:${props => props.colorInputs[0]};
  `

const RowDiv = styled.div`
font-size:0;
`

const RowTile = ({ tileHeight, tileWidth, colorInputs, column, shape, rowNumber }) => {
  let oneRow = [];
  let i = 0;
  do {
    oneRow.push(<TileDiv
      key={i}
      tileHeight={tileHeight + "px"}
      updateWidth={shape === "rectangle" ? tileWidth + "px" : tileHeight + "px"}
      colorInputs={colorInputs}
    />);
    i++;
  } while (i < column)

  return (
    <RowDiv className={rowNumber} >
      {oneRow}
    </RowDiv>
  )
}

export default RowTile

