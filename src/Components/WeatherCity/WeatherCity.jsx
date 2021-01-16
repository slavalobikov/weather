import React from 'react';

import cloudy from './../../img/cloudy-day.svg';
import clear from './../../img/day.svg';
import snowy from './../../img/snowy.svg';
import rainy from './../../img/rainy.svg';
import s from './WeatherCity.module.css';
import ButtonComponents from "../ButtonComponent/ButtonComponents";

const WeatherCity = (props) => {
    return (
        <div >
            <div className={s.city}>{props.weather.data.name}</div>
            <div className={s.temp}>
                {(props.weather.data.weather[0].main === "Clouds") && <div><img src={cloudy} alt="cloudy"/></div>}
                {(props.weather.data.weather[0].main === "Clear") && <div><img src={clear} alt="clear"/></div>}
                {(props.weather.data.weather[0].main === "Snow") && <div><img src={snowy} alt="snowy"/></div>}
                {(props.weather.data.weather[0].main === "Mist") && <div><img src={clear} alt="clear"/></div>}
                {(props.weather.data.weather[0].main === "Rain") && <div><img src={rainy} alt="rain"/></div>}
                <div className={s.temperatura}>{Math.round(props.weather.data.main.temp)} °C</div>
            </div>
            <div className={s.desc}>
                <div>
                    Ощущается как: {Math.round(props.weather.data.main.feels_like)}
                </div>
                <div className={s.description}>
                    {props.weather.data.weather[0].description}
                </div>
            </div>

            <ButtonComponents weather={props.weather} />

        </div>
    );
};

export default WeatherCity;