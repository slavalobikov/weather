import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";




import s from './App.module.css'
import {weatherApi} from "./API/api";
import sun from './img/cloudy-day.svg';
import Preloader from "./Components/preloader/Preloader";
import {SetWeatherThunk} from "./Redux/reducers/ForecastReducer";
import ErrorMessage from "./Components/ErrorMessage/ErrorMessage";


function AppContainer(props) {

    console.log('props', props)

  useEffect(() => {
      props.SetWeatherThunk()
  }, [])

  return (
      <div className={s.app}>
           <div className={s.wrap}>
               {!!props.isFetching && <Preloader />}
               {!props.isFetching && !props.isError && <img src={sun} alt="sun"/>}
               {!!props.isError && <ErrorMessage error={props.weather.status} /> }


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
