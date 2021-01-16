import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from "antd";


import s from './MoreInfo.module.css';


const MoreInfo = (props) => {

    return (
        <div className={s.modal}>
            {ReactDOM.createPortal(
                <div className={s.modal}>
                    <div className={s.flex}>
                        <div className={s.modalWindow}>
                            Подробнее о погоде:

                            <div className={s.center}>
                                <div className={s.name}> {props.weather.data.name}, {props.weather.data.sys.country}</div>
                                <div>Максимальная температура: {props.weather.data.main.temp_max} °C</div>
                                <div><hr/></div>
                                <div>Минимальная температура: {props.weather.data.main.temp_min} °C</div>
                                <div><hr/></div>
                                <div>Скорость ветра: {props.weather.data.wind.speed} км/час</div>
                                <div><hr/></div>
                                <div>Широта: {props.weather.data.coord.lon}</div>
                                <div><hr/></div>
                                <div>Долгота: {props.weather.data.coord.lat}</div>
                                <div><hr/></div>
                                <div>Видимость: {props.weather.data.visibility}</div>
                                <Button className={s.btn}  onClick={() => props.setMore(false)} type="primary" size={'large'}>
                                    Назад
                                </Button>
                            </div>

                        </div>
                    </div>

                </div>,
                document.getElementById('modalMore')
            )}
        </div>
    );
};

export default MoreInfo;