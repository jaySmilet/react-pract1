import * as React from 'react';
import useCounter from '../Counter/useCounter';

const CounterTwo = () => {
  const [counter, increment, decrement, reset] = useCounter(3,2);
  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Incremnet</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default CounterTwo;
