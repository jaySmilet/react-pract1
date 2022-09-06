import * as React from 'react';
import useDocTitle from '../Title/useDocTitle';

const DocTitleOne = () => {
  const [count, setCount] = React.useState(0);
  useDocTitle(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count-{count}</button>
    </div>
  );
};

export default DocTitleOne;
