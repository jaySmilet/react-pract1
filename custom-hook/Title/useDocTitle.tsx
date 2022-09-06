import * as React from 'react';

const useDocTitle = (count:number) => {
  React.useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
};
export default useDocTitle;
