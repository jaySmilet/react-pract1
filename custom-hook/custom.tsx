import * as React from 'react';
import useFetch from './useFetch';

const Custom = () => {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');
  return (
    <div>
      <h2>My Custom Hook</h2>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
};

export default Custom;
