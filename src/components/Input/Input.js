import React from 'react';

import { Field } from 'formik';

import './Input.scss';

const Input = ({name, label, placeholder, error, touched}) => {

    return (
        <div className="input">
            <label className="input__label" htmlFor={name}>{label}</label>
            <Field className={`input__field ${error && touched ? 'field__error' : null}`} name={name} placeholder={placeholder} />
            {error && touched ? (
                <p className="input__error">{error}</p> 
            ) : null}
        </div>
    );
};

export default Input;