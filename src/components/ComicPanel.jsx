import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";

const ComicPanel = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const canvas = new fabric.Canvas(canvasRef.current, {
        isDrawingMode: true,
      });

      canvas.freeDrawingBrush.width = 1;

      const width = container.offsetWidth;
      const height = container.offsetHeight;

      canvas.setWidth(width);
      canvas.setHeight(height);

      canvas.clipTo = function (ctx) {
        ctx.rect(0, 0, width, height);
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        border: "1px solid black",
        position: "relative",
        height: "100%",
        width: "100%",
      }}
    >
      <canvas ref={canvasRef} id="fabric-canvas" />
    </div>
  );
};

export default ComicPanel;
