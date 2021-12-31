import React, {FC, HTMLInputTypeAttribute, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultRootState } from '../redux/store';
import { TodoState } from '../types';
import { actions } from '../redux/todoReducer';

const TodoList: FC = () => {
  const todos: TodoState[] = useSelector((state: DefaultRootState) => state.todo);

  const dispatch = useDispatch();

  const deleteTodo = (id: number | null) => {
    dispatch(actions.deleteTodo(id))
  }

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem('todos') || '[]'
    ) as TodoState[];
    dispatch(actions.getTodo(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  if (!todos.length) {
    return <h2 className="empty-todo">You do not have any todo in your list</h2>
  }

  return (
    <div className="todos">
      {todos.map((todo: TodoState) => (
        <div className="todo-item" key={todo.id}>
          <span>{todo.title}</span>
          <button onClick={() => deleteTodo(todo.id)}>&times;</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
