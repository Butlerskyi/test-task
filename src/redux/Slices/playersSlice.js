import { createSlice } from "@reduxjs/toolkit";
import { getPlayers } from "../../api/requests/getPlayers";

const initialState = {
    players: [],
    itemsPerPage: 8,
    page: 1,
    totalPlayers: 0,
    totalPages: 0,
}

const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        changeItemsPerPage(state, action) {
            state.itemsPerPage = action.payload;
        },
        changePage(state, action) {
            state.page = action.payload;
        }
    },
    extraReducers: {
        [getPlayers.fulfilled]: (state, action) => {
            state.players = action.payload.data;
            state.totalPlayers = action.payload.meta.total_count;
            state.totalPages = action.payload.meta.total_pages;
        }
    }
})

export default playersSlice.reducer;
export const {changeItemsPerPage, changePage} = playersSlice.actions;