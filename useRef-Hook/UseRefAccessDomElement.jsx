import * as React from 'react';

const UseRefAccessDomElement = () => {
  const inputElement = React.useRef();
  const focusInput = () => {
    inputElement.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default UseRefAccessDomElement;

// Accessing DOM Elements
