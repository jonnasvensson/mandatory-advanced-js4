import React from 'react';

export default function Grid({onClickCircle, rows}) {    

    return(
        <div>
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
                rows.map((row, idy) => {
                    return <div className="rows"
                        key={idy}
                        style={{
                            margin: 3,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around"
                        }}> 
                    {row.map((circle, idx) => {
                            return <div className="circle" key={idx}
                            style={{
                            width: 40,
                            height: 40,
                            borderRadius: 40,
                            backgroundColor: circle ? circle : "white",
                            display: "flex",
                            alignContent: "space-around",
                            cursor: "pointer"
                            }}
                            onClick={(e) => onClickCircle(idx, idy)}></div>
                    })}</div>
                })
            }
            </div>
        </div>
    );
}

