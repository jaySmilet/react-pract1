import * as React from 'react';

const UseRefTrack = () => {
  const [inputValue, setInputValue] = React.useState('');
  const count = React.useRef(0);
  React.useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Render Count {count.current}</p>
    </div>
  );
};

export default UseRefTrack;

// Use useRef to track application renders.
