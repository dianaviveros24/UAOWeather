import React from 'react';
import './App.css';
import './Components/WeatherCity/WeatherCity.css'
import WeatherCity from "./Components/WeatherCity/WeatherCity";
import WeatherCityB from "./Components/WeatherCity/WeatherCityB";

function App() {
  return (
    <div className="o-content">
        <h1>Aplicación del clima</h1>

        <div className="o-card">
          <WeatherCity name = {"Santiago de Cali"}/>
        </div>

        <div className="o-card-1">
         <WeatherCityB name = {"Bogotá"}></WeatherCityB>
        </div>

        <div className="o-card-1">
         <WeatherCityB name = {"Medellín"}></WeatherCityB>
        </div>
    </div>
  );
}

export default App;
