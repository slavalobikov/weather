import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";




import s from './App.module.css'

import {SetWeatherThunk} from "./Redux/reducers/ForecastReducer";
import ErrorMessage from "./Components/ErrorMessage/ErrorMessage";
import InputCity from "./Components/InputCity/InputCity";
import Preloader from "./Components/preloader/Preloader";
import WeatherCity from "./Components/WeatherCity/WeatherCity";


function AppContainer(props) {


  return (
      <div className={s.app}>
           <div className={s.wrap}>


               <InputCity
                   weather={props.weather}
                   isFetching={props.isFetching}
                   SetWeatherThunk={props.SetWeatherThunk}
               />
               {!!props.isFetching && <Preloader />}

                              <button onClick={() => {
                   console.log(props.weather)
               }}>dddd</button>
               {!!props.isError && <ErrorMessage error={props.weather.status} /> }
               {(props.weather.status === 200) && <WeatherCity weather={props.weather} />
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
