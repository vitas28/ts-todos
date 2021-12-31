import React, { FC, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useDispatch } from 'react-redux';
import { actions } from './redux/todoReducer';

const App: FC = () => {
  const [todo, setTodo] = useState<string>('');
  const dispatch = useDispatch();
  const onTodo = () => {
    dispatch(actions.addTodo(todo));
    setTodo('');
  };

  const addHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  return (
    <div className="wrapper">
      <h1 className="title">Your todo list</h1>
      <TodoForm addHandler={addHandler} onTodo={onTodo} todo={todo} />
      <TodoList />
    </div>
  );
};

export default App;
