import React, { useState } from 'react';

import Dashboard from './components/Dashboard';
import Display from './components/Display';

import './App.css';

function App() {
  const [ballCount, setballCount] = useState(0);
  const [strikeCount, setStrikeCount] = useState(0);
  const [foulCount, setFoulCount] = useState(0);

  const [inningCount, setInningCount] = useState(0);
  const [bases, setBases] = useState([0,0,0]);
  //[0] = base1
  //[1] = base2
  //[2] = base3
  const [score, setScore] = useState([0,0,0,0]);
  //[0] = hits
  //[1] = doubles
  //[2] = triples
  //[3] = home runs

  const actions = {
    strike: () => {
      setStrikeCount(strikeCount + 1);
      if(strikeCount === 2) {
        setStrikeCount(0);
        setballCount(0);
      }
    },
    ball: () => {
      setballCount(ballCount + 1);
      if(ballCount === 3) {
        setballCount(0);
        setStrikeCount(0);
      }
    },
    foul: () => {
      setFoulCount(foulCount + 1);
      if(strikeCount === 0) {
        setStrikeCount(1)
      } else if (strikeCount === 1) {
          setStrikeCount(2)
      } else if (strikeCount === 2) {
          setStrikeCount(2);
      };
      if(foulCount === 3) {
        setFoulCount(0)
      }
    },
    hit: () => {
      setballCount(0);
      setStrikeCount(0);
    },
  }

  const gameStats = {
    ballScore: ballCount,
    strikesScore: strikeCount
  }


  return (
    <div className="App">
      <Display stats={gameStats} />
      <Dashboard increment={actions} />
    </div>
  );
}

export default App;
