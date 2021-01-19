import React from 'react';
import s from './InfoWeatherCard.module.css';
import cloudy from "../../../../img/cloudy-day.svg";
import clear from "../../../../img/day.svg";
import snowy from "../../../../img/snowy.svg";
import rainy from "../../../../img/rainy.svg";

const InfoWeatherCard = (props) => {
    return (
        <div className={s.container}>
            <div className={s.center}>
                <div>{props.time}:00</div>
                <div className={s.weatherImgAndTemp}>
                    <div>
                        {(props.weatherImgChoose === "Clouds") && <div><img src={cloudy} alt="cloudy"/></div>}
                        {(props.weatherImgChoose === "Clear") && <div><img src={clear} alt="clear"/></div>}
                        {(props.weatherImgChoose === "Snow") && <div><img src={snowy} alt="snowy"/></div>}
                        {(props.weatherImgChoose === "Mist") && <div><img src={clear} alt="clear"/></div>}
                        {(props.weatherImgChoose === "Rain") && <div><img src={rainy} alt="rain"/></div>}
                    </div>
                    <div className={s.temp}>{Math.round(props.temp)} °C</div>
                </div>
                <div> {props.description} </div>
                <div>Ощущается как: {Math.round(props.feels_like)} °C</div>


            </div>
        </div>
    );
};

export default InfoWeatherCard;