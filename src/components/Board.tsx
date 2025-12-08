import { useState, type FC } from "react";
import st from "./Board.module.css";
import { Square } from "./Squaer";

export type BoardType = object;

export const Board: FC<BoardType> = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));

    const addValueInSquare = () => {
        setSquares(squares);
        console.log("X");
    };

    return (
        <>
            <div className={st.boardRow}>
                <Square value={squares[0]} onClick={addValueInSquare} />
                <Square value={squares[1]} onClick={addValueInSquare} />
                <Square value={squares[2]} onClick={addValueInSquare} />
            </div>
            <div className={st.boardRow}>
                <Square value={squares[3]} onClick={addValueInSquare} />
                <Square value={squares[4]} onClick={addValueInSquare} />
                <Square value={squares[5]} onClick={addValueInSquare} />
            </div>
            <div className={st.boardRow}>
                <Square value={squares[6]} onClick={addValueInSquare} />
                <Square value={squares[7]} onClick={addValueInSquare} />
                <Square value={squares[8]} onClick={addValueInSquare} />
            </div>
        </>
    );
};
