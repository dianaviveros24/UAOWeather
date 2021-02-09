import React from "react";

/**
 * 
 * @param {Text} name 
 * name = Texto a asignar en el tituo
 */

 
const Title = ({name, nameBogota}) => {

    return <div>
        <h1 className="o-title">{name}</h1>
    </div>
     /*   <h2 className="o-title">{nameBogota}</h2>*/

};

export default Title;
/*
const Title = (props) => {
    console.log("Parámetros ", props);
    //const name = props.city;
    //Destructuring
    const {name} = props;
    const {cityb} = props;

    return(
        <div> <h2>{name}</h2>
        <h2>{cityb}</h2></div>

    );
};
*/
