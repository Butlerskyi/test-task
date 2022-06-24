import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeams } from '../../api/requests/getTeams';

import TeamsBadge from '../TeamsBadge/TeamsBadge';

import "./TeamsTable.scss";

const tableTitles = ['Name', 'City', 'Abbreviation', 'Conference']

const TeamsList = () => {

    const dispatch = useDispatch();
    const teams = useSelector(state => state.teams.teams);
    const teamsPerPage = useSelector(state => state.teams.itemsPerPage);
    const page = useSelector(state => state.teams.page);

    useEffect(() => {
        dispatch(getTeams({teamsPerPage, page}))
    }, [teamsPerPage, page, dispatch])

    return (
            <table className="teams__table">
                <thead className="teams__table__thead">
                    <tr className="teams__table__tr">
                        {tableTitles.map((item, index) => {
                            return <th key={index} className={`teams__table__th ${tableTitles[index].toLowerCase()}`}>{item}</th>
                        })}
                    </tr>
                </thead>
                <tbody className="teams__table__tbody">
                    {teams.map((item) => {
                            return (
                                <React.Fragment key={item.id}>
                                    <tr className="teams__table__tbody__tr">
                                        <td className="teams__table__td name">{item.name}</td>
                                        <td className="teams__table__td city">{item.city}</td>
                                        <td className="teams__table__td abbreviation">{item.abbreviation}</td>
                                        <td className="teams__table__td">
                                            <TeamsBadge>{item.conference}</TeamsBadge>
                                        </td>
                                    </tr>
                                </React.Fragment>
                            )
                    })}
                </tbody>
            </table>
    );
};

export default TeamsList;