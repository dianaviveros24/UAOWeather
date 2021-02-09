import React from 'react'
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, RAINDROP, NRAIN} from "../../Constants/Weathers";
import WeatherIcons from "react-weathericons";

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
    [NRAIN]: "night-rain",
    [RAINDROP]: "raindrop"
};

const WeatherExtra = ({ humidity, wind }) => {
    return (
        <div>
            <p></p>
            <hr className="o-horizontal"></hr>
            <WeatherIcons name = {RAINDROP} size="2x" />
            <span>{` Humidity ${humidity}%`}</span><br></br>

            <WeatherIcons name = {WINDY} size="2x" />
            <span>{` Wind ${wind}`}</span>
            <p></p>

    </div>
    );
};
export default  WeatherExtra;