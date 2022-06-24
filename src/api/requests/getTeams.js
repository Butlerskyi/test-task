import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

export const getTeams = createAsyncThunk('teams', async (payload) => {
    const res = await api.get(`teams?per_page=${payload.teamsPerPage}&page=${payload.page}`);

    return res.data;
})