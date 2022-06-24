import React from 'react';

import './PlayerCard.scss';

const PlayerCard = ({firstName, lastName}) => {
    return (
        <div className="card">
            <div className="card__picture">
                <p className="card__picture__text">{firstName.slice(0, 1)}{lastName.slice(0, 1)}</p>
            </div>
            <div className="card__name">
                <div className="card__name__item">{firstName}</div>
                <div className="card__name__item">{lastName}</div>
            </div>
        </div>
    );
};

export default PlayerCard;