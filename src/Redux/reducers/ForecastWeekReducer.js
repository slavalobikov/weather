import {weatherApi} from "../../API/api";

const SET_WEATHER_WEEK = 'forecast-week/SET_WEATHER_WEEK';
const IS_FEATCHING_WEEK = 'forecast-week/IS_FEATCHING_WEEK';



let initialState = {
    weatherWeek:[],
    isFetching:null,
    error:null,

}

const ForecastWeekReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER_WEEK: {
            return {
                ...state,
                weatherWeek:action.weatherWeek
            }
        }
        case IS_FEATCHING_WEEK: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
/*        case SET_WEATHER: {
            return {
                ...state,
                weatherWeek: action.weatherWeek
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
        }*/
        default:
            return state
    }

}

const SetWeatherWeek = (weatherWeek) => ({type:SET_WEATHER_WEEK, weatherWeek})
const IsFeatchingWeek = (isFetching) => ({type:IS_FEATCHING_WEEK, isFetching })


export const SetWeatherWeekThunk = (city) => async (dispatch) => {
    dispatch(IsFeatchingWeek(true))
    let response = await weatherApi.forWeek(city)
    dispatch(SetWeatherWeek(response))
    dispatch(IsFeatchingWeek(false))
}

export default ForecastWeekReducer;