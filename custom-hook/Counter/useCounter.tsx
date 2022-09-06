import * as React from 'react';

const useCounter = (initialCounter = 0, value = 1) => {
  const initialcounter = 2;
  const [counter, setCounter] = React.useState(initialCounter);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + value);
  };
  const decrement = () => {
    setCounter((prevCounter) => prevCounter - value);
  };
  const reset = () => {
    setCounter(initialcounter);
  };
  return [counter, increment, decrement, reset];
};

export default useCounter;
