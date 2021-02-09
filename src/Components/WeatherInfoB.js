import React from "react";
import WeatherExtraB from "../Components/WeatherExtra /WeatherExtraB";
import WeatherTempB from "./../Components/WeatherTemp/WeatherTempB";
import {RAIN} from "../Constants/Weathers";


const WeatherInfoB = () => (
    <div className="o-weather-information-a">
        <div>
            <WeatherTempB temp={6} weatherState={RAIN}/> 
        </div>      
        <WeatherExtraB humidity={ 60} wind=" 20 m/s"/>
    </div>
    
);

export default WeatherInfoB;