import { ADD_JOG, EDIT_JOG, ADD_JOGS } from "../actions";


export const addJogs = (items) => {
    return { 
        type: ADD_JOGS,
        items: items
    };
}

export const addJog = (item) => {
    return { 
        type: ADD_JOG,
        item: item
    };
}

export const editJog = (item, index) => {
    return { 
        type: EDIT_JOG,
        item: item,
        index: index
    };
}

