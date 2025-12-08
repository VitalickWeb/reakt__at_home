import { useState, type FC } from "react";
import st from "./Board.module.css";
import { Square } from "./Squaer";

export type BoardType = object;

export const Board: FC<BoardType> = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));

    return (
        <>
            <div className={st.boardRow}>
                <Square value={squares[0]} />
                <Square value={squares[1]} />
                <Square value={squares[2]} />
            </div>
            <div className={st.boardRow}>
                <Square value={squares[3]} />
                <Square value={squares[4]} />
                <Square value={squares[5]} />
            </div>
            <div className={st.boardRow}>
                <Square value={squares[6]} />
                <Square value={squares[7]} />
                <Square value={squares[8]} />
            </div>
        </>
    );
};
