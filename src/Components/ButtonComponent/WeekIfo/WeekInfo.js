import React from 'react';
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import {Button} from "antd";
import classNames from 'classnames';



import s from './WeekInfo.module.css';
import Loader from "../../Loader/Loader";
import {SetWeatherWeekThunk} from "../../../Redux/reducers/ForecastWeekReducer";
import InfoWeatherCard from "./InfoWeatherCard/InfoWeatherCard";

class WeekInfo extends React.Component {

    componentDidMount() {
        this.props.SetWeatherWeekThunk(this.props.name)
    }

    render() {
/*        if (!!this.props.weatherWeek[0]) {
            console.log('weatherWeek',new Date(this.props.weatherWeek[0].dt_txt).getDate())

        }*/

        let today = [];
        let arrWithoutToday = [];
        let tomorrow = [];
        let arrWithoutTodayAndTomorrow = [];
        let tomorrowTomorrow = [];

        this.props.weatherWeek.forEach(el => {
            if (new Date(this.props.weatherWeek[0].dt_txt).getDate() === new Date(el.dt_txt).getDate()) {
                today.push(el)
            } else {
                arrWithoutToday.push(el)
            }
        })
            arrWithoutToday.forEach(el => {
                if (new Date(arrWithoutToday[0].dt_txt).getDate() === new Date(el.dt_txt).getDate()) {
                    tomorrow.push(el)
                }
                else {
                    arrWithoutTodayAndTomorrow.push(el)
                }
            })
        arrWithoutTodayAndTomorrow.forEach(el => {
            if (new Date(arrWithoutTodayAndTomorrow[0].dt_txt).getDate() === new Date(el.dt_txt).getDate()) {
                tomorrowTomorrow.push(el)
            }
        })
        console.log('tomorrow', tomorrow)


        return (
            <div>
                {ReactDOM.createPortal(
                    <div className={classNames({
                        [s.modalPreloader]: !!this.props.isFetching,
                        [s.modal]: !this.props.isFetching,
                    })} >
                            {!!this.props.isFetching && <Loader/>}
                            {!this.props.isFetching && <div>
                                <div className={s.btnCon}> <Button className={s.btn}  onClick={() => this.props.setWeek(false)} type="primary"
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
                        </div>,
                    document.getElementById('modalWeek')
                )}
            </div>
        );
    }
}

let mapStateToProps = (state) => ( {
    weatherWeek:state.ForecastWeekReducer.weatherWeek,
    isFetching:state.ForecastWeekReducer.isFetching,
});

export default connect(mapStateToProps, {
    SetWeatherWeekThunk,
})(WeekInfo);