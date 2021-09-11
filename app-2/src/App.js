import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListItem from './Components/ListItem';
import './App.css';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(({data}) => {
      setList(data.results)
    })
  }, [])

  return (
    <div className="App">
      {list.map((el, index) => {
        return <ListItem name={el.name} key={index} />
      })}
    </div>
  );
}

export default App;
