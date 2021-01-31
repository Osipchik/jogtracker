import { ADD_JOG, EDIT_JOG, ADD_JOGS } from "../actions";
import { createReducer } from '@reduxjs/toolkit';


const initialState = {
    jogs: []
};



export const jogsReducer = createReducer(initialState, {
    [ADD_JOG]: (state, action) => {
        state.jogs.push(action.item);
    },
    [ADD_JOGS]: (state, action) => {
        state.jogs = action.items;
    },
    [EDIT_JOG]: (state, action) => {
        state.jogs[action.index] = action.item;
    }
})
