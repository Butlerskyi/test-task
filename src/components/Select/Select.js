import React from 'react';
import { useDispatch } from 'react-redux';

import './Select.scss';

const Select = ({selectFunc, name, label, options, selected}) => {

    const dispatch = useDispatch();

    return (
        <div className={`select ${name ? 'margin' : null}`}>
            {label ? <label className="select__label" htmlFor={name}>{label}</label> : null}
            <select key={selected} defaultValue={selected} 
                className={`select__input ${name ? 'large' : 'small'}`}
                onChange={(e) => {
                    if (label) {
                        selectFunc(e.target.value);
                    } else {
                        dispatch(selectFunc(Number(e.target.value)))
                    }
                }}
                >
                {options.map((item, index) => {
                    return (
                        <option key={index} 
                            className="select__input__option" 
                            value={item}>
                                {item}
                        </option>
                    )
                })}
            </select>
        </div>
    );
};

export default Select;