import * as React from 'react';
import useCounter from '../Counter/useCounter';

const CounterOne = () => {
  const [counter, increment, decrement, reset] = useCounter(1, 1);
  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Incremnet</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default CounterOne;
