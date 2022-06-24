import React from 'react';
import { useSelector } from 'react-redux';
import { changeItemsPerPage, changePage } from '../../redux/Slices/playersSlice';

import PlayersCardList from '../PlayersCardList/PlayersCardList';
import Pagination from '../Pagination/Pagination';
import Subtitle from '../Subtitle/Subtitle';

import './PlayersBlock.scss';

const PlayersBlock = () => {

    const selectedItem = useSelector(state => state.players.itemsPerPage);
    const selectedPage = useSelector(state => state.players.page);
    const totalItems = useSelector(state => state.players.totalPlayers);
    const totalPages = useSelector(state => state.players.totalPages);

    return (
        <div className="players__block">
            <Subtitle text='Players' />
            <PlayersCardList />
            <Pagination displayAmount="1-8"
                totalItems={totalItems}
                totalPages={totalPages}
                selectedItem={selectedItem} 
                selectedPage={selectedPage}
                selectItemsPerPage={changeItemsPerPage}
                selectPage={changePage} />
        </div>
    );
};

export default PlayersBlock;