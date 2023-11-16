import React, { useEffect, useState } from 'react';
import '../styles/Body.css';

const Body = () => {
  const [apiData, setApiData] = useState(null);
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

      const fetchData = async (location) => {
        try {
          const response = await fetch(`http://127.0.0.1:5000/api/weather?location=${location}`);
          const data = await response.json();
          setApiData(data); // Set the fetched data to the state for rendering in the UI
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      return (
        <div className="button-container">
          <h2>Locations:</h2>
          <div className="button-container">
            {buttonLabels.map((label, index) => (
              <button key={index} onClick={() => fetchData(label)}>
                {label}
              </button>
            ))}
          </div>
          {apiData && (
            <div>
              <h2>Weather Information for {apiData.location}:</h2>
              <p>Temperature: {apiData.temperature} °C</p>
              <p>Humidity: {apiData.humidity}%</p>
              <p>Wind Speed: {apiData.wind_speed} m/s</p>
              <p>Description: {apiData.description}</p>
            </div>
          )}
        </div>
      );
    };

export default Body;