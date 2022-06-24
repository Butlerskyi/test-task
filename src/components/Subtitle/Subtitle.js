import React from 'react';
import "./Subtitle.scss";

const Subtitle = ({text}) => {
    return (
        <div className="subtitle">
            {text}
        </div>
    );
};

export default Subtitle;