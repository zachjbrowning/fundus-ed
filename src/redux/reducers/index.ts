import { combineReducers } from 'redux';

import { fundusReducer } from "./fundusReducer";

export const rootReducer =  combineReducers({
    fundus : fundusReducer,
})

export type RootState = ReturnType<typeof rootReducer>