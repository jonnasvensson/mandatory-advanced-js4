import React, { useReducer } from 'react';



function reducer(state, action) {
    switch (action.type) {
        case 'player':
            console.log('Click player');
            return  state.playerOne === true ? 'Player one' : 'Player two';        
        default:
            break;
    }
    
}

export default function Player() {
    const [state, dispatch] = useReducer(reducer, { playerOne: 'red' });
    return (
        <div>
            <h2>Player</h2>
            <h3>Active player: {state.playerOne}</h3>
            <button onClick={() => dispatch({ type: 'player' })}>Player</button>
        </div>
    );
}