import React, { useState } from 'react';
import './WeatherApp.css';

import SearchIcon from '../assets/search.png';
import ClearIcon from '../assets/clear.png';
import CloudIcon from '../assets/cloud.png';
import Drizzling from '../assets/drizzle.png';
import SnowFall from '../assets/snow.png';
import Windy from '../assets/wind.png';
import Humid from '../assets/humidity.png'
import Rain from '../assets/rain.png'

const WeatherApp = () => {

    const api_key = "867fc9d44a3d76d912767cbdee162687"
    const [weatherIcon, setWeatherIcon] = useState(CloudIcon)

    const searchBtn = async () => {
        try {
            const element = document.getElementsByClassName('city');
            if (element[0].value === "") {
                return false;
            }

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value.trim()}&units=Metric&appid=${api_key}`

            const res = await fetch(url);
            const data = await res.json();

            console.log(element[0].value.trim())
            if (data && data?.cod === "404") {
                console.log(data); 
                alert(data?.message)
            }

            if (data && data?.length !== 0) { //&& data?.cod !== "404"

                const humidity = document.getElementsByClassName('humidity');
                const windyRate = document.getElementsByClassName('windRate');
                const temperature = document.getElementsByClassName('temperature');
                const location = document.getElementsByClassName('location');

                if (humidity[0]) {
                    humidity[0].innerHTML = data.main.humidity + " %";
                }

                windyRate[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
                temperature[0].innerHTML = Math.floor(data.main.temp) + "&deg;C";
                location[0].innerHTML = data.name;

                if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
                    setWeatherIcon(ClearIcon);
                } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
                    setWeatherIcon(CloudIcon);
                } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
                    setWeatherIcon(Drizzling);
                } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
                    setWeatherIcon(Drizzling);
                } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
                    setWeatherIcon(Rain);
                } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
                    setWeatherIcon(Rain);
                } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
                    setWeatherIcon(SnowFall);
                } else {
                    setWeatherIcon(ClearIcon)
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='container'>
            <div className="topBar">
                <input type="text" className='city' placeholder='Search Your City' />
                <div className="searchIconContainer" onClick={() => searchBtn()}>
                    <img src={SearchIcon} alt={SearchIcon} />
                </div>
            </div>
            <div className="weatherImages">
                <img src={weatherIcon} alt={weatherIcon} />
            </div>
            <div className="temperature">32&deg;C</div>
            <div className="location">New Delhi</div>
            <div className="data">
                <div className="element">
                    <img src={Humid} alt={Humid} className="icon" />
                    <div className="weatherData">
                        <div className="humidity">64%</div>
                        <div className="text">Humid</div>
                    </div>
                </div>
                <div className="element">
                    <img src={Windy} alt={Windy} className="icon" />
                    <div className="weatherData">
                        <div className="windRate">22 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default WeatherApp;