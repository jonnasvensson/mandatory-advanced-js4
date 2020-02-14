import React from 'react';

export default function ResetButton({ onClickReset }) {
    return (
        <button
        onClick={()=> onClickReset()}
        style={{
            margin: 5,
            borderRadius: 8,
        }}>Start Over!</button>
    )
};