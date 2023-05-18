import React, { useState } from "react";
import NavBar from "./components/NavBar";
import ComicGrid from "./components/ComicGrid";

const App = () => {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);
  const [renderKey, setRenderKey] = useState(0);

  const handleGenerate = (newRows, newColumns) => {
    setRows(newRows);
    setColumns(newColumns);
    setRenderKey(renderKey + 1);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <NavBar onGenerate={handleGenerate} />
      <div id="comicGrid">
        <ComicGrid
          key={renderKey}
          rows={parseInt(rows, 10)}
          columns={parseInt(columns, 10)}
        />
      </div>
    </div>
  );
};

export default App;
