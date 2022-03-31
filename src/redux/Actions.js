import { ADD_TASK, DELETE_TASK, DONE, EDIT } from "./Types"
export const add_task = (x) => {
    return {
        type: ADD_TASK,
        payload: { description: x, isDone: false, id: Math.random() }
    }
}

export const delete_task = (id) => {
    return {
        type: DELETE_TASK,
        id
    }
}

export const done = (id) => {
    return {
        type: DONE,
        id
    }
}
export const edit_task = (x,id) => {
    return {
        type: EDIT,
        description: x,
        id
        
        
    }
}