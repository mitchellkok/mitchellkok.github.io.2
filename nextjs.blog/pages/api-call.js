import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');
  console.log("Attempting API test")
  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/api-test`)).json();
      setData(text);
    })();
  });

  return <div>{data}</div>;
}

export default App;