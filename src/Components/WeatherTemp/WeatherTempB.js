import React from "react";
import WeatherIcons from "react-weathericons";
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, NRAIN, RAINDROP} from "../../Constants/Weathers";
import PropTypes from "prop-types";

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

const getWeatherIconB = weatherState => {
    const icon = icons[weatherState] ? icons[weatherState]: "rain";
    return <WeatherIcons name = {icon} size="2x"/>;
};

const WeatherTempB = ({temp, weatherState}) => (
     <div>
        <div className="o-weather-icon">{getWeatherIconB(weatherState)}</div>
        <span >{`${temp} Cº` + `RAIN`}</span>

    </div>
 
);

WeatherTempB.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTempB;