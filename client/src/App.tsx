import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [data, setData] = useState<{message : string} | null> (null);

  useEffect(() => {
    fetch('http://localhost:3001/api/data')
    .then(response => response.json())
    .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>React and Node.js Integration</h1>
      {data && <p>{data.message}</p>}
    </div>
  )
}

export default App;