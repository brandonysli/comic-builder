import React from "react";
import ComicPanel from "./ComicPanel";

const ComicGrid = ({ rows, columns }) => {
  const comicPanels = Array(rows * columns)
    .fill(null)
    .map((_, index) => <ComicPanel key={index} />);

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
    maxWidth: "90vw",
    maxHeight: "100%",
    margin: "auto",
    padding: "20px",
    gap: "10px",
  };

  const cellStyle = {
    maxHeight: "200px",
  };

  return (
    <div style={gridStyle}>
      {comicPanels.map((panel, index) => (
        <div style={cellStyle} key={index}>
          {panel}
        </div>
      ))}
    </div>
  );
};

export default ComicGrid;
