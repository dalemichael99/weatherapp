import React, { useEffect, useState } from 'react';
import '../styles/Body.css';

const Body = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      setLoading(true);
      await fetch(`http://127.0.0.1:5000/api/weather?location=${location}`)
        .then(response => response.json())
        .then(data => {
          setApiData(data);
        })
        .catch(error => {
          setError(error.message || 'Something went wrong');
        })
        .finally(() => setLoading(false));
    };

    return (
      <div className="body-container">
        <div className="button-and-api-container">
          <div className="button-container">
            <h2>Locations:</h2>
            {buttonLabels.map((label, index) => (
              <button key={index} onClick={() => fetchData(label)}>
                {label}
              </button>
            ))}
          </div>
          <div className="api-info-container">
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {apiData && (
              <div>
                <h2>Weather for {apiData.location}:</h2>
                <p>Temperature: {apiData.temperature} &#8451;</p>
                <p>Humidity: {apiData.humidity}&#37;</p>
                <p>Wind Speed: {apiData.wind_speed} m/s</p>
                <p>Description: {apiData.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

export default Body;