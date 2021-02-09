import React from "react";
import WeatherExtra from "../Components/WeatherExtra /WeatherExtra";
import WeatherTemp from "./../Components/WeatherTemp/WeatherTemp";

const WeatherInfo = ({data: {temp, weatherState, humidity, wind}}) => (
    <div className="o-weather-information">
        <div>
            <WeatherTemp temp={temp} weatherState={weatherState} /> 
        </div>      
        <WeatherExtra humidity={ humidity} wind={wind}/>
    </div>
    
); 

export default WeatherInfo;