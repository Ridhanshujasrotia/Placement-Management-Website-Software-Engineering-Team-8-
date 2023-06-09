import React from "react";
import "../styles/Popup.css";
const Popup = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-content">
          <p>{message}</p>
          <button className="button2" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
