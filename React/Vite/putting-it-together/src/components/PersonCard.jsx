import React from "react";
import { useState } from "react";



const btnStyle = {
    padding: '12px 15px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: 'linear-gradient(30deg, rebeccapurple, magenta)',
    color: '#fff',
    border: 'none'
};
function PersonCard(props) {

    const { firstName, lastName, age, hairColor } = props;
    const [countAge, setCountAge] = useState(age);
    const handel = () => {
        setCountAge(countAge + 1);
    }
    return (

        <>
            <h4>Name: {firstName} {lastName}</h4>
            <p>Age: {countAge}</p>
            <p>HairColor: {hairColor}</p>
            <button className={btnStyle} onClick={handel}>Button {firstName} {lastName}</button>
        </>
    );
}




export default PersonCard; 