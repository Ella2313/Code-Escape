import React from "react";
import "./AlertBox.css";

function AlertBox({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="alert-overlay">
      <div className="alert-box glass">
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default AlertBox;
