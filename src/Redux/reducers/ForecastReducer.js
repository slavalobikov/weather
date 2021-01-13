import {weatherApi} from "../../API/api";

const SET_WEATHER = 'SET_WEATHER';
const IS_FEATCHING = 'IS_FEATCHING';
const IS_ERROR = 'IS_ERROR'

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

export const SetWeatherThunk = () => async (dispatch) => {
    dispatch(IsFetching(true))
    let response = await weatherApi.byCityName('Minsk')
    if (response.status == 200) {
        dispatch(SetWeather(response))
    } else {

        dispatch(IsError(true))
    }


    dispatch(IsFetching(false))


}


export default ForecastReducer;