import React from 'react';
import './WeatherApp.css';

import SearchIcon from '../assets/search.png';
import ClearIcon from '../assets/clear.png';
import CloudIcon from '../assets/cloud.png';
import Drizzling from '../assets/drizzle.png';
import SnowFall from '../assets/snow.png';
import Windy from '../assets/wind.png';
import Humid from '../assets/humidity.png'

const WeatherApp = () => {
    return (
        <div className='container'>
            <div className="topBar">
                <input type="text" className='city' placeholder='Search Your City' />
                <div className="searchIconContainer">
                    <img src={SearchIcon} alt={SearchIcon} />
                </div>
            </div>
            <div className="weatherImages">
                <img src={CloudIcon} alt={CloudIcon} />
            </div>
            <div className="temperature">32&deg;C</div>
            <div className="location">London</div>
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
                        <div className="humidity">22 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default WeatherApp;