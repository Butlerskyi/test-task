import { combineReducers, configureStore } from '@reduxjs/toolkit'
import teamsReducer from './Slices/teamsSlice';
import playersReducer from './Slices/playersSlice';

const rootReducer = combineReducers({
    teams: teamsReducer,
    players: playersReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;