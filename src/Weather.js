import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
    function handleResponse(response) {// eslint-disable-next-line
        alert('The weather in ${response.data.main} is ${response.data.main.temp}°C');
    }// eslint-disable-next-line
    let apikey = "8f2a727a8d5b5cadf3134d55a1087a44";// eslint-disable-next-line
    let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apikey}&units=metric';
    
    axios.get(apiUrl).then(handleResponse);
    return (
    <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
    />
    );
 }