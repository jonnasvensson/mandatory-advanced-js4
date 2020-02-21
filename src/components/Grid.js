import React from 'react';

export default function Grid({ onClickCircle, rows }) {

    return (
        <>
            <div className="container"
                style={{
                    position: "relative",
                }}>
               
                <div className="gridWrapper"
                    style={{
                        width: 400,
                        height: 440,
                        border: "2px solid grey",
                        boxSizing: "border-box",
                        backgroundColor: "palevioletred ",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        borderRadius: 8,
                    }}>
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
                                            width: 50,
                                            height: 50,
                                            borderRadius: "50%",
                                            backgroundColor: circle ? circle : "white",
                                            display: "flex",
                                            alignContent: "space-around",
                                            cursor: "pointer"
                                        }}
                                        onClick={(e) => onClickCircle(idx, idy)}></div>
                                })}
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    );
}

