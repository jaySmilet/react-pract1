import * as React from 'react';

type TodoProp = {
  todo: any[];
};

const Todo = (props: TodoProp) => {
  console.log('child render');
  return (
    <div>
      <h2>My Todos</h2>
      {props.todo.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </div>
  );
};

export default React.memo(Todo);
