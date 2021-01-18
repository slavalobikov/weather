import React from 'react';
import InputCity from "../InputCity/InputCity";
import Preloader from "../preloader/Preloader";
import WeatherCity from "../WeatherCity/WeatherCity";

import s from './../../App.module.css';

class AppWithLoclStorage extends React.Component {


    componentDidMount() {
        this.props.SetWeatherThunk(localStorage.getItem('weatherslavalobikov'))
    }

    render() {
        return (
            <div className={s.app}>
                <div className={s.wrap}>


                    <InputCity
                        weather={this.props.weather}
                        isFetching={this.props.isFetching}
                        SetWeatherThunk={this.props.SetWeatherThunk}
                    />
                    {!!this.props.isFetching && <Preloader/>}


                    {(this.props.weather.status === 200) && <WeatherCity weather={this.props.weather}/>
                    }


                </div>

            </div>
        );
    }
}

export default AppWithLoclStorage;