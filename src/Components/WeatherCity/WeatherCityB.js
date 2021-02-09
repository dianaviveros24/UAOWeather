import React from "react";
import Title from "../Title/Title";
import WeatherInfoB from "../WeatherInfoB"
import { checkPropTypes } from "prop-types";

//Funcional Component
const WeatherCityB = (props) => (    //funcion de tipo arrow
           <div>
                <Title name = {props.name}/>
                <WeatherInfoB/>
            </div>
    
    );

export default WeatherCityB;