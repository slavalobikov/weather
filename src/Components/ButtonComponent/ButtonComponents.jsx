import React, {useState} from 'react';
import {Button} from 'antd';


import MoreInfo from "./MoreInfo/MoreInfo";
import s from './ButtonComponent.module.css';
import WeekInfo from "./WeekIfo/WeekInfoContainer.js";

function ButtonComponents(props) {


    const [more, setMore] = useState(false)
    const [week, setWeek] = useState(false)

    return (
        <div className={s.flex}>

            <Button onClick={() => setWeek(true)} type="default" size={'large'}>
                Рассписание
            </Button>


            <Button className={s.btnleft} onClick={() => setMore(true)} type="primary" size={'large'}>
                Подробнее
            </Button>
            {!!more && <MoreInfo setMore={setMore} weather={props.weather} />}
            {!!week && <WeekInfo name={props.weather.data.name}  setWeek={setWeek} />}

        </div>
    );
}

export default ButtonComponents;