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

const getWeatherIcon = weatherState => { 
    const icon = icons[weatherState] ? icons[weatherState]: "day-sunny";
    return <WeatherIcons name = {icon} size="5x"/>;

    //icons[weatherIcons] buscar el valor que se asigne a weather Stae en icons
};

const WeatherTemp = ({temp, weatherState}) => (
    //<WeatherIcons size="5x" name="day-sunny"/>

    <div>
        <div className="o-weather-icon">{getWeatherIcon(weatherState)}</div>
        <span className="o-weather-description">{`${temp} Cº` + `SUNNY`}</span>
    </div> 
);


WeatherTemp.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherState: PropTypes.string
};

export default WeatherTemp;