import React, {useState} from 'react';
import {Button} from 'antd';


import MoreInfo from "./MoreInfo/MoreInfo";
import s from './ButtonComponent.module.css';

function ButtonComponents(props) {

    const [more, setMore] = useState(false)

    return (
        <div className={s.flex}>

            <Button onClick={() => setMore(true)} type="default" size={'large'}>
                Рассписание
            </Button>


            <Button className={s.btnleft} onClick={() => setMore(true)} type="primary" size={'large'}>
                Подробнее
            </Button>
            {!!more && <MoreInfo setMore={setMore} weather={props.weather} />}

        </div>
    );
}

export default ButtonComponents;