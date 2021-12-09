import './App.css';
import React, { useState, useEffect } from 'react';
import CryptoGraph from './CryptoGraph.js';
import { getData } from './getData.js'

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getData()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  console.log(list);

  return (
    <div className="App">
      <CryptoGraph/>
    </div>
  );
}

export default App;
