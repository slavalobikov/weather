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

        return (
            <div>
                {ReactDOM.createPortal(
                    <WeekInfo isFetching={this.props.isFetching}
                              setWeek={this.props.setWeek}
                              today={this.props.today}
                              tomorrow={this.props.tomorrow}
                              tomorrowTomorrow={this.props.tomorrowTomorrow}
                             />,
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