import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

export const getPlayers = createAsyncThunk('players', async (payload) => {
    const res = await api.get(`players?per_page=${payload.playersPerPage}&page=${payload.page}`);

    return res.data;
})