import './App.css';
import React, { useState, useEffect } from 'react'
import CryptoGraph from './CryptoGraph.js'
import { SpinningCircles } from 'react-loading-icons'

function App() {
  const [list, setList] = useState([])

  useEffect(() => {

    const interval = setInterval( async() => {
      fetch("https://min-api.cryptocompare.com/data/generateAvg?fsym=ETH&tsym=USD&e=Coinbase&api_key=95b514849a7f4a7ccfd570eae8ae950a4fbb00e0ef2daa452e25521282163fc5")
        .then(res => {
          return res.json()
        })
        .then(data => {
          //console.log(data)
          setList(data.DISPLAY)
          console.log(data.DISPLAY.CHANGEPCT24HOUR)
        })
    }, 10000)

    return () => { clearInterval(interval) }
  }, [])

  //console.log(list)

  return (
    <div className="App">
      <CryptoGraph />
      {(list.CHANGEPCT24HOUR) ? `Ethereum has changed ${list.CHANGEPCT24HOUR} % the last 24hrs` : <SpinningCircles />}
    </div>
  )
}

export default App;
