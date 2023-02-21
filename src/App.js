import React, { useState } from 'react';
import getData from './misc/getData';
import Card from './components/Cards/Main/mainCard';
import HistoryCard from './components/Cards/History/historyCard';
import './App.css';

function App() {
  const [data, setData] = useState(null)
  const [searchInput, setSearchInput] = useState('')
  const [history, setHistory] = useState([])
  const [error, setError] = useState(false)

  const handleChange = (event) => {
    const value = event.target.value
    setSearchInput(value)
  }

  const handleHistoryTrack = (entry) => {
    let tempArray = history
    if (tempArray.length === 5) {
      tempArray.shift()
      tempArray.push(entry)
    } else {
      tempArray.push(entry)
    }
    setHistory(tempArray)
  }

  const handleGet = () => {
    getData(searchInput)
      .then((data) => {
        if (data.cod !== '404') {
          setData(data)
          handleHistoryTrack(data)
          error && setError(false)
        }
        else {
          setError(true)
        }
      }).catch((err) => {
        console.log(err)
      })
  }

  const handleChangeCurrent = (city) => {
    getData(city.name)
      .then((data) => {
        setData(data)
        setSearchInput(data.name)
        setError(false)
      }).catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="container">
      <input type='test' onChange={(e) => handleChange(e)} value={searchInput} />
      <button onClick={() => handleGet()}>Get data</button>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        {!error ? data && <Card data={data} />
          :
          <span>City not found</span>
        }
        {history?.map((city) => <HistoryCard data={city} handleClick={() => handleChangeCurrent(city)} />)}
      </div>
    </div>
  );
}

export default App;
