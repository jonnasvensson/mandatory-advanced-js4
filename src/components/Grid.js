import React from 'react';

export default function Grid({onClickCircle, rows}) {    

    return(
        <div>
            <h2>Grid</h2>
            <div className="gridWrapper"
                style={{ 
                    width: 300,
                    height: 340, 
                    border: "2px solid black",
                    backgroundColor: "palevioletred ",
                    margin: 20,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around"}}>
            {
                rows.map((row, x) => {
                    return <div className="rows"
                        key={x}
                        style={{
                            margin: 3,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around"
                        }}> 
                    {row.map((circle, y) => {
                            return <div className="circle" key={y}
                            style={{
                            width: 40,
                            height: 40,
                            borderRadius: 40,
                            backgroundColor: circle ? circle : "white",
                            display: "flex",
                            alignContent: "space-around"
                            }}
                            onClick={(e) => onClickCircle(x, y)}>x={x}, y={y}</div>
                    })}</div>
                })
            }
            </div>
        </div>
    );
}

