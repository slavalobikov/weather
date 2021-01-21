import React from 'react';
import ReactDOM from "react-dom";
import {connect} from "react-redux";





import {SetWeatherWeekThunk} from "../../../Redux/reducers/ForecastWeekReducer";
import WeekInfo from "./WeekInfo";

class WeekInfoContainer extends React.PureComponent {

    componentDidMount() {
        this.props.SetWeatherWeekThunk(this.props.name)
    }



    render() {
        console.log('today', this.props.today)
        console.log('tomorrow', this.props.tomorrow)

        /*let today = [];
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
*/

        return (
            <div>
                {ReactDOM.createPortal(
                    <WeekInfo isFetching={this.props.isFetching}
                              setWeek={this.props.setWeek}
                              today={this.props.today}
                              tomorrow={this.props.tomorrow}
                              tomorrowTomorrow={this.props.tomorrowTomorrow}
                              /*today={today} tomorrow={tomorrow}
                              tomorrowTomorrow={tomorrowTomorrow}*/ />,
                    document.getElementById('modalWeek')
                )}
            </div>
        );
    }
}

let mapStateToProps = (state) => ( {
    weatherWeek:state.ForecastWeekReducer.weatherWeek,
    isFetching:state.ForecastWeekReducer.isFetching,
    today:state.ForecastWeekReducer.today,
    tomorrow: state.ForecastWeekReducer.tomorrow,
    tomorrowTomorrow: state.ForecastWeekReducer.tomorrowTomorrow,
});

export default connect(mapStateToProps, {
    SetWeatherWeekThunk,
})(WeekInfoContainer);