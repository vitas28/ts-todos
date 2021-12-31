import { TodoState } from '../types';
import {InferActionsTypes} from "./store";

const ADD_TODO = 'ADD_TODO';
const GET_TODOS = 'GET_TODOS';
const DELETE_TODO = 'DELETE_TODO'

const initialState: TodoState[] = [];

export const todoReducer = (state: TodoState[] = initialState, action: ActionsType) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case GET_TODOS:
      return action.payload;
    case DELETE_TODO:
      return state.filter((todo: TodoState) => action.payload !== todo.id)
    default:
      return state;
  }
};

export const actions = {
  getTodo: (data: TodoState[]) => ({
    type: GET_TODOS,
    payload: data,
  }),
  addTodo: (todo: string) => ({
    type: ADD_TODO,
    payload: {id: Date.now(), title: todo},
  }),
  deleteTodo: (id: number | null) => ({
    type: DELETE_TODO,
    payload: id
  })
}

export type ActionsType = InferActionsTypes<typeof actions>


