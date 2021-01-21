import React from 'react';
import classNames from "classnames";
import s from "./WeekInfo.module.css";
import Loader from "../../Loader/Loader";
import {Button} from "antd";
import InfoWeatherCard from "./InfoWeatherCard/InfoWeatherCard";

const WeekInfo = ({isFetching, setWeek, today, tomorrow, tomorrowTomorrow }) => {

    return (
        <div className={classNames({
            [s.modalPreloader]: !!isFetching,
            [s.modal]: !isFetching,
        })} >
            {!!isFetching && <Loader/>}
            {!isFetching && <div>
                <div className={s.btnCon}> <Button className={s.btn}  onClick={() => setWeek(false)} type="primary"
                                                   size={'large'}>
                    Назад
                </Button></div>

                <div className={s.todayInfo}>
                    <h1>Сегодня</h1>

                    <div className={s.today}>
                        {today.map(el => (
                                <InfoWeatherCard
                                    key={el.dt}
                                    feels_like={el.main.feels_like}
                                    temp={el.main.temp}
                                    description={el.weather[0].description}
                                    weatherImgChoose={el.weather[0].main}
                                    time={new Date(el.dt_txt).getHours()} />
                            )
                        )}
                    </div>
                </div>

                <div className={s.todayInfo}>
                    <h1>Завтра</h1>

                    <div className={s.today}>
                        {tomorrow.map(el => (
                                <InfoWeatherCard
                                    key={el.dt}
                                    feels_like={el.main.feels_like}
                                    temp={el.main.temp}
                                    description={el.weather[0].description}
                                    weatherImgChoose={el.weather[0].main}
                                    time={new Date(el.dt_txt).getHours()} />
                            )
                        )}
                    </div>
                </div>

                <div className={s.todayInfo}>
                    <h1>Послезавтра</h1>

                    <div className={s.today}>
                        {tomorrowTomorrow.map(el => (
                                <InfoWeatherCard
                                    key={el.dt}
                                    feels_like={el.main.feels_like}
                                    temp={el.main.temp}
                                    description={el.weather[0].description}
                                    weatherImgChoose={el.weather[0].main}
                                    time={new Date(el.dt_txt).getHours()} />
                            )
                        )}
                    </div>
                </div>

            </div>
            }
        </div>
    );
};

export default WeekInfo;