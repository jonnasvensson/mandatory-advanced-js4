import React, { useReducer } from 'react';

import Grid from './Grid';
import ResetButton from './ResetButton';
import { checkWinner } from './CheckWinner';

function board() {
    let rows = Array(6).fill(null);   // 6st rader
    return rows.map(() => Array(7).fill(null));
}

export default function Game() {
    const [state, dispatch] = useReducer(reducer, {
        rows: board(),
        idx: 0,
        idy: 0,
        player: 'Red',
        gameOver: false,
        countClick: 1,
        tie: false,
    }); // rows, x, y är states!

    return (
        <>
            <div className="h2Container"
                style={{
                    marginTop: 10,
                    width: 600,
                    display: "flex",
                    justifyContent: "space-between"

                }}>
                <div style={{
                        backgroundColor: "palevioletred",
                        borderRadius: 8,
                        border: "2px solid grey",
                        boxSizing: "border-box",
                        display:"flex", 
                        justifyContent: "center",

                }}>
                    <h2 style={{
                        writingMode: "vertical-rl",
                        textOrientation: "upright",
                    }}>Connect four</h2>

                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around"
                }}>
                </div>

                <Grid
                    rows={state.rows}
                    onClickCircle={(idx, idy) => dispatch({ type: 'circle', idx, idy })} />

            </div>
            <div style={{
                    width: 600,
                    height: 180,
                    marginTop: 10,
                    backgroundColor: "palevioletred",
                    borderRadius: 8,
                    border: "2px solid grey",
                    boxSizing: "border-box",

                }}>
                    <h2>Player : {state.player}</h2>
                    {
                        (state.gameOver || state.tie) && (
                            <>
                                <h4>{state.gameOver ? `The winner is ${state.player}` : `IT'S A TIE!`}</h4>
                                <ResetButton onClickReset={() => dispatch({ type: 'reset' })} />
                            </>
                        )
                    }
                </div>
        </>
    );
}
   

function reducer(state, action) {
    switch (action.type) {
        case 'circle':
            if (state.gameOver) return state;
            const { idx, idy } = action;
            console.log('X : ' + action.idx, 'Y : ' + action.idy);
            console.log(state.player);

            console.log(state.rows);

            let y = 5;
            while (y >= 0) {
                if (state.rows[y][idx] === null) {  //  Denna kollar att state.rows på y axel och platsen idx = null då kan man inte markerar den circeln som klickas på utan trillar längst ned!
                    break;
                }
                y--;
            }
            if (y < 0) {
                return state;
            }
            const newRows = [...state.rows]; // newRows kopierar det som finns i state.row från useReducer och läggs i newRows
            const newRow = [...newRows[y]];  //newRow kopierar newRows[index]

            newRow[idx] = state.player;
            newRows[y] = newRow;
            console.log(y);
            
            
            return {
                ...state,
                rows: newRows,
                player: !checkWinner(newRows) ? (state.player === 'Red' ? 'Blue' : 'Red') : state.player,
                gameOver: checkWinner(newRows), // Denna rad är samma som if sats nedan!
                countClick: state.countClick+1, 
                tie: state.countClick === 42 ? true : false,
            };

                  /* 
                         if (checkWinner(newRows)) {    
                             return {
                                 ...state,
                                 rows: newRows,
                                 gameOver: true,
                             }
                        }   
             */

        case 'reset':
            console.log('click');
            return {
                rows: board(),
                idx: 0,
                idy: 0,
                player: 'Red',
                gameOver: false
            };

        default:
            return state;
    }
}

function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

// action.type loggar case 'namn'
// type = case
// action loggar ett object som har innehållet i din dispatch

