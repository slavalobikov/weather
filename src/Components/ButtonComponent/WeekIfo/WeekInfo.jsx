import React from 'react';
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import {Button} from "antd";



import s from './WeekInfo.module.css';
import Loader from "../../Loader/Loader";
import {SetWeatherWeekThunk} from "../../../Redux/reducers/ForecastWeekReducer";

class WeekInfo extends React.Component {

    componentDidMount() {
        this.props.SetWeatherWeekThunk(this.props.name)
    }

    render() {


        return (
            <div>
                {ReactDOM.createPortal(
                    <div className={s.modal}>
                        <div className={s.wrap}>
                            {!!this.props.isFetching && <Loader/>}
                            {!this.props.isFetching && <div>
                                <Button className={s.btn} onClick={() => this.props.setWeek(false)} type="primary"
                                        size={'large'}>
                                    Назад
                                </Button>
                                <div>
                                    <span></span>
                                </div>
                            </div>
                            }
                        </div>
                    </div>,
                    document.getElementById('modalWeek')
                )}
            </div>
        );
    }
}

let mapStateToProps = (state) => ( {
    weatherWeek:state.ForecastWeekReducer.weatherWeek,
    isFetching:state.ForecastWeekReducer.isFetching,
});

export default connect(mapStateToProps, {
    SetWeatherWeekThunk,
})(WeekInfo);