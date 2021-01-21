import React from 'react';
import {
    WarningOutlined,
} from '@ant-design/icons';

import s from './ErrorMessage.module.css'


const ErrorMessage = ({error}) => {
    return (
        <div className={s.ErrorMessage}>
            <div className={s.Icon}><WarningOutlined /></div>
            <div>Произошла некоторая  ошибка! <span>Возможно вы ввели не коректный поисковой запрос</span></div>
        </div>
    );
};

export default ErrorMessage;