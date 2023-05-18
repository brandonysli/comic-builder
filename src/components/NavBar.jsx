import React, { useState } from "react";
import html2canvas from "html2canvas";
import {
  IconCirclePlus,
  IconDownload,
  IconArrowBackUp,
  IconHome,
} from "@tabler/icons-react";
import WelcomePopup from "./WelcomePopup";

const NavBar = ({ onGenerate }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupRows, setPopupRows] = useState(3);
  const [popupColumns, setPopupColumns] = useState(3);
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);

  const handlePopupGenerateClick = () => {
    if (popupRows < 1 || popupColumns < 1) {
      return;
    }
    onGenerate(popupRows, popupColumns);
    setShowPopup(false);
  };

  const handleDownloadClick = () => {
    const input = document.getElementById("comicGrid");

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        let link = document.createElement("a");
        link.href = imgData;
        link.download = "comic.png";

        link.dispatchEvent(
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        );
      })
      .catch((err) => console.error(err));
  };

  const iconStyle1 = {
    marginLeft: "10px",
    height: "42px",
    width: "42px",
  };

  const iconStyle2 = {
    marginRight: "10px",
    height: "42px",
    width: "42px",
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        borderBottom: "1px solid black",
      }}
    >
      <div style={{ marginLeft: "45px" }}>
        <IconHome style={iconStyle1} onClick={() => window.location.reload()} />
        <IconArrowBackUp style={iconStyle1} />
      </div>
      <div>
        <span style={{ fontWeight: "bold", fontSize: "32px" }}>
          "Comic Builder" by Brandon Li
        </span>
      </div>
      <div style={{ marginRight: "45px" }}>
        <IconDownload style={iconStyle2} onClick={handleDownloadClick} />
        <IconCirclePlus style={iconStyle2} onClick={() => setShowPopup(true)} />
      </div>
      {showWelcomePopup && (
        <WelcomePopup onClose={() => setShowWelcomePopup(false)} />
      )}
      {showPopup && (
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
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <label>
              Rows:
              <input
                type="number"
                value={popupRows}
                onChange={(e) => setPopupRows(Number(e.target.value))}
                placeholder="Rows"
              />
            </label>
            <label>
              Columns:
              <input
                type="number"
                value={popupColumns}
                onChange={(e) => setPopupColumns(Number(e.target.value))}
                placeholder="Columns"
              />
            </label>
            <button onClick={handlePopupGenerateClick}>Generate</button>
            <button onClick={() => setShowPopup(false)}>Cancel</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
