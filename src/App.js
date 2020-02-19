import React from 'react';
import './App.css';

import Grid from './components/Grid';
import Game from './components/Game';



  export default function App() {

        return (
            <div className="App"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                <h2>Connect four</h2>
                <Game />
            </div>
      );
  }
