import { combineReducers, createStore } from 'redux';
import { todoReducer } from './todoReducer';

const reducers = combineReducers({
  todo: todoReducer,
});

type RootReducer = typeof reducers;
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type DefaultRootState = ReturnType<RootReducer>;

export const store = createStore(reducers);
