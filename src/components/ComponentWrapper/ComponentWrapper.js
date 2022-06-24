import React from 'react';
import './ComponentWrapper.scss';

const ComponentWrapper = ({children}) => {
    return (
        <div className="component__wrapper">
            {children}
        </div>
    );
};

export default ComponentWrapper;