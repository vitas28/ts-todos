import React, { FC } from 'react';

type Props = {
  todo: string;
  addHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onTodo: () => void;
};

const TodoForm: FC<Props> = ({ todo, addHandler, onTodo }) => {
  return (
    <div className="form">
      <input onChange={addHandler} type="Enter your case" value={todo} />
      <button onClick={onTodo}>Add</button>
    </div>
  );
};

export default TodoForm;
