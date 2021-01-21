import {weatherApi} from "../../API/api";

const SET_WEATHER_WEEK = 'forecast-week/SET_WEATHER_WEEK';
const IS_FEATCHING_WEEK = 'forecast-week/IS_FEATCHING_WEEK';
const TODAY = 'forecast-week/TODAY';
const SET_TOMORROW = 'forecast-week/SET_TOMORROW';
const SET_TOMORROW_TOMORROW = 'forecast-week/SET_TOMORROW_TOMORROW';



let initialState = {
    weatherWeek:[],
    today:[],
    tomorrow:[],
    tomorrowTomorrow:[],
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
        case TODAY: {
            let Today = [];
            let arrWithoutToday = [];

            action.today.forEach(el => {
                if (new Date(action.today[0].dt_txt).getDate() === new Date(el.dt_txt).getDate()) {
                    Today.push(el)
                } else {
                    arrWithoutToday.push(el)
                }
            })

            return {
                ...state,
                today: Today
            }
        }
        case SET_TOMORROW: {
            return {
                ...state,
                tomorrow: action.tomorrow
            }
        }
        case SET_TOMORROW_TOMORROW: {
            return {
                ...state,
                tomorrowTomorrow:action.tomorrowTomorrow
            }
        }

        default:
            return state
    }

}

const SetWeatherWeek = (weatherWeek) => ({type:SET_WEATHER_WEEK, weatherWeek})
const IsFeatchingWeek = (isFetching) => ({type:IS_FEATCHING_WEEK, isFetching })
const SetToday = (today) => ({type:TODAY, today})
const SetTomorrow = (tomorrow) => ({type: SET_TOMORROW, tomorrow})
const SetTomorrowTomorrow = (tomorrowTomorrow) => ({type: SET_TOMORROW_TOMORROW, tomorrowTomorrow})


export const SetWeatherWeekThunk = (city) => async (dispatch) => {
    dispatch(IsFeatchingWeek(true))
    let response = await weatherApi.forWeek(city)
    dispatch(SetWeatherWeek(response))
    dispatch(SetToday(response))

    /*    let Today = [];
    let arrWithoutToday = [];
    let Tomorrow = [];
    let arrWithoutTodayAndTomorrow = [];
    let TomorrowTomorrow = [];
    response.forEach(el => {
        if (new Date(response[0].dt_txt).getDate() === new Date(el.dt_txt).getDate()) {
            Today.push(el)
        } else {
            arrWithoutToday.push(el)
        }
    })
    dispatch(SetToday(Today))
    arrWithoutToday.forEach(el => {
        if (new Date(arrWithoutToday[0].dt_txt).getDate() === new Date(el.dt_txt).getDate()) {
            Tomorrow.push(el)
        }
        else {
            arrWithoutTodayAndTomorrow.push(el)
        }
    })
    dispatch(SetTomorrow(Tomorrow))
    arrWithoutTodayAndTomorrow.forEach(el => {
        if (new Date(arrWithoutTodayAndTomorrow[0].dt_txt).getDate() === new Date(el.dt_txt).getDate()) {
            TomorrowTomorrow.push(el)
        }
    })
    dispatch(SetTomorrowTomorrow(TomorrowTomorrow));*/

    dispatch(IsFeatchingWeek(false))
}

export default ForecastWeekReducer;