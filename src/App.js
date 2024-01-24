import './App.css'
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ApiExample() {
  const apiKey = 'faeac638b6e64a598f4150901231710';
  const [weather, setWeather] = useState(null);
  const [name, setName] = useState('');

  const getWeather = () => {
    Axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${name}`)
      .then((res) => {
        setWeather(res.data);
      })
      .catch((error) => {
        console.error('Error fetching weather:', error);
        setWeather(null);
      });
  };

  useEffect(() => {

    getWeather();
  }, []); 

  return (
<div className="card" style={{ marginTop: '200px', marginLeft: '350px', marginRight: '350px'}}>
      <div className="card-body">
        <h4>Enter the name of a city to see the current weather</h4>
        <input className="form-control mb-2" onChange={(event) => setName(event.target.value)} placeholder="Enter city"></input>
        <button onClick={getWeather} type="button" className="btn btn-primary mb-2">Get Weather</button>
        {weather && (
          <div style={{marginTop: '20px', paddingLeft: '20px', paddingRight: '20px'}}>
            <h5 className="card-title">
              The current temperature in {weather.location.name}, {weather.location.region} ({weather.location.country}) is:{' '}
              {weather.current.temp_f}°F
            </h5>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ApiExample />
    </div>
  );
}

export default App;

