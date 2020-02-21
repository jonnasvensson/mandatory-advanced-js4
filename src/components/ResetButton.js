import React from 'react';

export default function ResetButton({ onClickReset }) {
    return (
        <button
        onClick={()=> onClickReset()}
        style={{
            margin: 5,
            borderRadius: 8,
            height: 50,
            width: 300,
            backgroundColor: "palevioletred",
            fontFamily: "Libre Franklin",
            fontWeight: "bolder",

        }}>Start Over!</button>
    )
};