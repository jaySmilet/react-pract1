import * as React from 'react';
import Todo from './Todo';

const Memo = () => {
  const [count, setCount] = React.useState(0);
  const [todo, setTodo] = React.useState(['a', 'b']);

  const increment = () => {
    setCount((c) => c + 1);
  };
  return (
    <div>
      <Todo todo={todo} />
      <div>
        <p>Count {count}</p>
        <button onClick={increment}>++</button>
      </div>
    </div>
  );
};

export default Memo;
