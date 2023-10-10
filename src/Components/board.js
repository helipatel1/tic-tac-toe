import React from "react"
import "./board.css";
import { Box } from './box';

export const Board = ({ board,onClick }) => {

    return (
        <div className="board">
            {board.map((value,index) => (
                <Box key={index} value={value} onClick={() => value === null && onClick(index)} />
            ))}
        </div>
    )

}