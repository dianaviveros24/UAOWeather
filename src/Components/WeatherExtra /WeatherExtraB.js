import React from 'react'
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, RAINDROP, NRAIN} from "../../Constants/Weathers";
import WeatherIcons from "react-weathericons";


const WeatherExtraB = ({ humidity, wind }) => {
    return (
        <div>
            <p></p>
            <div className="o-vertical"></div>

            <WeatherIcons name = {RAINDROP} size="lg" />
            <span>{` Humidity ${humidity}%`}</span><br></br>

            <WeatherIcons name = {WINDY} size="1x" />
            <span>{` Wind ${wind}`}</span>
    </div>
    );
};
export default  WeatherExtraB;