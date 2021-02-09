import React, { Component } from "react";
import Title from "../Title/Title";
import WeatherInfo from "../WeatherInfo";

const infoCity = {
    temp: "30", 
    state: "SUNNY",
    humidity: 10,
    wind: 9
}
const infoCity2 = {
    temp: "20", 
    state: "CLOUDY",
    humidity: 5,
    wind: 7
}
/*
//Funcional Component
const WeatherCity=(props) => {    //funcion de tipo arrow
           return(
           <div>
                <Title name = {props.name}/>
                <WeatherInfo data={infoCity}/>
            </div>
           )
};
*/

//Class Component
class WeatherCity extends Component{
    constructor(){
        super();
        this.state = {
            name : "Palmira",
            data: infoCity
        }
    }

    handleClick = () => {
        console.log("Actualiza!");
        this.setState({
            data: infoCity2
        })
    }
    render(){
        const {name, data} = this.state;
        return(
            <div>
                <Title city = {name}/>
                <WeatherInfo data={data}/>
                <button onClick= {this.handleClick}>Actualizar</button>
            </div>
        )
    }
}

export default WeatherCity;