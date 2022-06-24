import React from 'react';
import { useSelector } from 'react-redux';

import { changeItemsPerPage, changePage } from '../../redux/Slices/teamsSlice';

import FilterPanel from '../FilterPanel/FilterPanel';
import Pagination from '../Pagination/Pagination';
import Subtitle from '../Subtitle/Subtitle';
import TeamsTable from '../TeamsList/TeamsTable';

import './TeamsBlock.scss';

const TeamsBlock = () => {

    const selectedItem = useSelector(state => state.teams.itemsPerPage);
    const selectedPage = useSelector(state => state.teams.page);
    const totalTeams = useSelector(state => state.teams.totalTeams);
    const totalPages = useSelector(state => state.teams.totalPages);

    return (
        <div className="teams__block">
            <Subtitle text='Teams' />
            <FilterPanel />
            <TeamsTable />
            <Pagination displayAmount="1-20"
                totalItems={totalTeams}
                totalPages={totalPages}
                selectedItem={selectedItem} 
                selectedPage={selectedPage}
                selectItemsPerPage={changeItemsPerPage}
                selectPage={changePage} />
        </div>
    );
};

export default TeamsBlock;