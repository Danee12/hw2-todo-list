import { v4 } from 'uuid';

// id 생성 함수
const createId = () => {
    const tokens = v4().split('-')
    return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4];
}

// action value
const ADD_TODO = 'todoReducer/ADD_TODO'
const DELETE_TODO = 'todoReducer/DELETE_TODO'
const CHANGE_DONE_TODO = 'todoReducer/CHANGE_DONE_TODO'
const FIND_TODO = `todoReducer/FIND_TODO`

// action creater
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
}

export const changeDoneTodo = (payload) => {
    return {
        type: CHANGE_DONE_TODO,
        payload
    }
}

export const findTodo = (payload) => {
    return {
        type: FIND_TODO,
        payload
    }
}

// 초기값 세팅
const initialState = {
    todos: [
        {
            id: createId(),
            title: '리액트',
            content: '리액트를 배워봅시다.',
            idDone: false
        }
    ],
    todo : []
}

// Reducer
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = { ...action.payload, id: createId(), idDone: false }
            return { todos: [...state.todos, newTodo], todo:state.todo};
        case DELETE_TODO:
            const deleteTodo = state.todos.filter((todo) => todo.id !== action.payload)
            return { todos: deleteTodo, todo:state.todo };
        case CHANGE_DONE_TODO:
            const changeTodo = state.todos.map(todo => todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo)
            return { todos: changeTodo, todo:state.todo };
        case FIND_TODO:
            const findTodo = state.todos.find(todo => todo.id === action.payload)
            return {todos: state.todos, todo:findTodo};
        default:
            return state;
    }
}

export default todoReducer;