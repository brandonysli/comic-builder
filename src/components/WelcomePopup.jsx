import React from "react";

const WelcomePopup = ({ onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "25px",
          maxWidth: "25vw",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ marginTop: "-5px" }}>Welcome to the Comic Builder!</h2>
        <p style={{ marginTop: "-10px" }}>
          This website is dedicated to ENGL 1167 FWS: Reading Now taught by Oona
          Cullen. The website allows you to create your own comics from scratch.
          I built this website using a framework called React.js, and I used a
          library called fabric.js to allow users to draw on each comic cell.
          Some of the functions are being able to generate a specific number of
          columns and rows, drawing on the individual cells, and
          downloading/saving the comic as a png. This project was heavily
          inspired by "Understanding Comics" by Scott McCloud.
        </p>
        <button onClick={onClose}>Get Started</button>
      </div>
    </div>
  );
};

export default WelcomePopup;
