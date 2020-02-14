import React, { useReducer } from 'react';

import Grid from './Grid';
import ResetButton from './ResetButton';


let rows = Array(6).fill(null);   // 6st rader

rows = rows.map(() => Array(7).fill(null));

export default function Game() {

    const [state, dispatch] = useReducer(reducer, { rows, x: 0, y: 0 }, ); //    reducer function är functionen ovan!
    
    return(
        <div>
            <Grid
            rows={state.rows}
            onClickCircle={(x, y)=> dispatch({ type: 'color', x, y})} />
            <p>{state.x} {state.y}</p>
            <ResetButton
            onClickReset={() => dispatch({ type: 'reset' })} />
        </div>
    );
}

function reducer(state, action) {
    switch (action.type) {
        case 'color':
            const { x, y } = action;
            console.log(state, action.x, action.y);

            const newRows = [...state.rows];
            const newColumn = [...newRows[x]];

            newColumn[y] = "red";
            newRows[x] = newColumn;

            return {
                rows: newRows,
                x: action.x,
                y: action.y
            };
        case 'reset':
            console.log('click');
            
            return state; 
            default: 
            return state;
    }
}


// action.type loggar case 'namn'
// type = case
// action loggar ett object som har innehållet i din dispatch