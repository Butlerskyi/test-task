import { createSlice } from "@reduxjs/toolkit";
import { getTeams } from "../../api/requests/getTeams";

const initialState = {
    teams: [],
    itemsPerPage: 10,
    page: 1,
    totalTeams: 0,
    totalPages: 0,
}

const teamsSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {
        addTeam(state, action) {
            // methods pop and unshift only for test task coz i cant add new item into database
            state.teams.unshift({...action.payload, id: state.totalTeams + 1});
            state.teams.pop();
            state.totalTeams += 1;
        },
        changeItemsPerPage(state, action) {
            state.itemsPerPage = action.payload;
        },
        changePage(state, action) {
            state.page = action.payload;
        }
    },
    extraReducers: {
        [getTeams.fulfilled]: (state, action) => {
            state.teams = action.payload.data;
            state.totalTeams = action.payload.meta.total_count;
            state.totalPages = action.payload.meta.total_pages;
        }
    }
});

export default teamsSlice.reducer;
export const { addTeam, changeItemsPerPage, changePage } = teamsSlice.actions;