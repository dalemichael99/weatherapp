import React, { useEffect } from 'react';
import '../styles/Body.css';

const Body = () => {
  const buttonLabels = [
    "Lake District National Park",
    "Corfe Castle",
    "The Cotswolds",
    "Cambridge",
    "Bristol",
    "Oxford",
    "Norwich",
    "Stonehenge",
    "Watergate Bay",
    "Birmingham"
    ];

    useEffect(() => {
        document.title = "Weather App";
      }, []);

  return (
    <div className="button-container">
      <h2>Locations:</h2>
      <div className="button-container">
        {buttonLabels.map((label, index) => (
          <button key={index}>{label}</button>
        ))}
      </div>
    </div>
  );
};

export default Body;