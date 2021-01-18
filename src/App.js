import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";


import s from './App.module.css'

import {SetWeatherThunk} from "./Redux/reducers/ForecastReducer";
import InputCity from "./Components/InputCity/InputCity";
import Preloader from "./Components/preloader/Preloader";
import WeatherCity from "./Components/WeatherCity/WeatherCity";
import Loader from "./Components/Loader/Loader";
import AppWithLoclStorage from "./Components/AppWithLocalStorage/AppWithLoclStorage";


function AppContainer(props) {

    if (!localStorage.getItem('weatherslavalobikov')) {
        localStorage.setItem('weatherslavalobikov', '')
    }
    if (!!localStorage.getItem('weatherslavalobikov') && localStorage.getItem('weatherslavalobikov') !== '') {
        //props.SetWeatherThunk(localStorage.getItem('weatherslavalobikov'))
        return  (
            <AppWithLoclStorage
                weather={props.weather}
                isFetching={props.isFetching}
                SetWeatherThunk={props.SetWeatherThunk} />
        )

    }



    return (
        <div className={s.app}>
            <div className={s.wrap}>


                <InputCity
                    weather={props.weather}
                    isFetching={props.isFetching}
                    SetWeatherThunk={props.SetWeatherThunk}
                />
                {!!props.isFetching && <Preloader/>}


                {(props.weather.status === 200) && <WeatherCity weather={props.weather}/>
                }


            </div>

        </div>
    );
}

let mapStateToProps = (state) => ( {
    isFetching:state.ForecastReducer.isFetching,
    isError:state.ForecastReducer.isError,
    weather:state.ForecastReducer.weather,
});

export default compose(
    connect(mapStateToProps, {SetWeatherThunk}),
    )(AppContainer);
