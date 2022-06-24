import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getPlayers } from '../../api/requests/getPlayers';

import PlayerCard from '../PlayerCard/PlayerCard';

import './PlayersCardList.scss';

const PlayersCardList = () => {

    const dispatch = useDispatch();
    const players = useSelector(state => state.players.players);
    const playersPerPage = useSelector(state => state.players.itemsPerPage);
    const page = useSelector(state => state.players.page);

    useEffect(() => {
        dispatch(getPlayers({playersPerPage, page}));
    }, [playersPerPage, page, dispatch]);

    return (
        <div className="card__list">
            {players.map((item) => {
                    return (
                        <PlayerCard key={item.id} firstName={item.first_name} lastName={item.last_name} />
                    )
            })}
        </div>
    );
};

export default PlayersCardList;