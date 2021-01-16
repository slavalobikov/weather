import React, {useState} from 'react';

import 'antd/dist/antd.css';
import s from './InputCity.module.css'

import { Input } from 'antd';
const { Search } = Input;

const InputCity = (props) => {

    const [isInput, setInput] = useState(false);


    const onSearch = value => {
        props.SetWeatherThunk(value)
        console.log('weather', props.weather)
        setInput(false)
    };



    return (
        <div>
            {!isInput && <span className={s.inputik} onClick={() => setInput(true)} >{!!props.isFetching &&
            <span>Загрузка...</span>}
                {!props.isFetching && <span className={s.city}>Введите город</span>}
            </span>}

            {!!isInput && <div className={s.Input}>
                <Search className={s.search} autoFocus={true}
                        loading={!!props.isFetching}
                        placeholder="Введите город"
                        onSearch={onSearch} enterButton />
            </div>

            }

        </div>
    );
};

export default InputCity;