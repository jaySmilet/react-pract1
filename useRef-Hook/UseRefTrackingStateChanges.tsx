import * as React from 'react';

const UseRefTrackingStateChanges = () => {
  const [inputValue, setInputValue] = React.useState('');
  const previousInputValue = React.useRef('');
  React.useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Current Value {inputValue}</p>
      <p>Previous Value {previousInputValue.current}</p>
    </div>
  );
};

export default UseRefTrackingStateChanges;

// Tracking State Changes.
