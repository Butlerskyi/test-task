import React from 'react';

import "./TeamsBadge.scss";

const TeamsBadge = ({children}) => {

    return (
        <div className={`teams__badge ${children === "West" ? 'west' : 'east'}`}>
            <p className={`teams__badge__text ${children === "West" ? 'west' : 'east'}`}>{children}</p>
        </div>
    );
};

export default TeamsBadge;