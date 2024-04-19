import React, { useState, useEffect } from 'react';

function ApiCall() {
  const [data, setData] = useState('');
  
  useEffect(() => {
    (async function () {
      console.log("Attempting API test")
      const { text } = await( await fetch(`/api/pokemon`)).json();
      setData(text);
    })();
  }, []);

  return <div>
        {JSON.stringify(data, null, 2)}
    </div>;
}

export default ApiCall;