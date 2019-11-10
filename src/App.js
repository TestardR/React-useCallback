import React, { useState, useCallback } from 'react';
import { Hello } from './Hello';
import { Square } from './Square';

function App() {
  const [count, setCount] = useState(0);
  const favoriteNums = [10, 100, 1000];

  const increment = useCallback(
    n => {
      setCount(c => c + n);
    },
    [setCount]
  );

  // const increment = () => {
  //   setCount(c => c + 1);
  // };

  return (
    <div>
      <Hello increment={increment}></Hello>
      <div>count: {count}</div>
      {favoriteNums.map(n => {
        return <Square increment={increment} n={n} key={n} />;
      })}
    </div>
  );
}

export default App;
