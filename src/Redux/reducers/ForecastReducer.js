import {weatherApi} from "../../API/api";

const SET_WEATHER = 'forecast/SET_WEATHER';
const IS_FEATCHING = 'forecast/IS_FEATCHING';
const IS_ERROR = 'forecast/IS_ERROR'

let initialState = {
    isFetching: null,
    weather: [],
    isError: null,
}

const ForecastReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER: {
            return {
                ...state,
                weather: action.weather
            }
        }
        case IS_FEATCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case IS_ERROR: {
            return {
                ...state,
                isError: action.error
            }
        }


        default:
            return state
    }
}

const SetWeather = (weather) => ({type: SET_WEATHER, weather})
const IsFetching = (isFetching) => ({type: IS_FEATCHING, isFetching})
const IsError = (error) => ({type: IS_ERROR, error})

export const SetWeatherThunk = (city) => async (dispatch) => {
    try {
        dispatch(IsFetching(true))
        let response = await weatherApi.byCityName(city)
        if (response.status === 200) {
            dispatch(IsError(false))
            dispatch(SetWeather(response))
            localStorage.setItem('weatherslavalobikov', response.data.name)
        }
        dispatch(IsFetching(false))
    } catch (err) {
        dispatch(IsError(true))
        dispatch(IsFetching(false))
    }



}


export default ForecastReducer;