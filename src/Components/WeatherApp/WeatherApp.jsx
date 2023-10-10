import React from 'react';
import './WeatherApp.css';
import searchicon from '../Assets/search.png';
import clearicon from '../Assets/clear.png';
import cloudicon from '../Assets/cloud.png';
import drizzleicon from '../Assets/drizzle.png';
import rainicon from '../Assets/rain.png';
import snowicon from '../Assets/snow.png';
import windicon from '../Assets/wind.png';
import humidityicon from '../Assets/humidity.png';
import { useState } from 'react';

export const WeatherApp = () => {
    let apikey = "ce500786fd751bd62b6af3cde63b72ab";
    const [wicon,setWicon] = useState(cloudicon);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if(element[0].value === "")
        {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apikey}`;
        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-percent");
        const tmp = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-loc");

        humidity[0].innerHTML = data.main.humidity+"%";
        wind[0].innerHTML = data.wind.speed+" Km/h";
        tmp[0].innerHTML = data.main.temp+" °C";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n")
        {
            setWicon(clearicon);
        }
        else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n")
        {
            setWicon(cloudicon);
        }
        else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n")
        {
            setWicon(drizzleicon);
        }
        else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n")
        {
            setWicon(drizzleicon);
        }
        else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n")
        {
            setWicon(rainicon);
        }
        else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n")
        {
            setWicon(rainicon);
        }
        else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n")
        {
            setWicon(snowicon);
        }
        else
        {
            setWicon(clearicon);
        }








    }
  return (
    <div className="container">
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='Search' />
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={searchicon} alt="ss"/>
            </div>
        </div>
        <div className="weather-image">
            <img src={wicon} alt="weather"/>
        </div>

        <div className="weather-temp"></div>

        <div className="weather-loc"></div>

        <div className="data-container">


            <div className="element">
                <img src={humidityicon} alt="humidity" className="icon" />
                <div className="data">
                    <div className="humidity-percent"></div>
                    <div className="text">Humidity</div>
                </div>
            </div>



            <div className="element">
                <img src={windicon} alt="wind" className="icon" />
                <div className="data">
                    <div className="wind-percent"></div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>




        </div>
    </div>
  )
}

export default WeatherApp