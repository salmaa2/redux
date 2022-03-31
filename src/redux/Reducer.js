import { ADD_TASK, DELETE_TASK, DONE, EDIT } from "./Types"

const initialState = {
    todolist : [{description: 'Eat', isDone: false, id:'0'},{description: 'Read a book', isDone: false, id:'1'},{description: 'Play', isDone: false, id:'2'}]
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {

    case ADD_TASK:
            return { ...state, todolist: [...state.todolist, action.payload] }
        
        case DELETE_TASK:
            return {...state, todolist: state.todolist.filter((el) => el.id !== action.id) }
        case DONE:
            return { ...state, todolist: state.todolist.map(el => el.id === action.id ? { ...el, isDone: !el.isDone } : el) }
        case EDIT: 
            return { ...state, todolist: state.todolist.map(el => el.id === action.id ? {...el, description : action.description} : el )}

    default:
        return state
    }
}