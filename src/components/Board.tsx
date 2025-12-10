import { useState, type FC } from "react";
import st from "./Board.module.css";
import { Square } from "./Squaer";

export type BoardType = object;

export const Board: FC<BoardType> = () => {
    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const addValueInSquare = (i: number) => {
        if (squares[i]) {
            return;
        }

        const nextSquares = [...squares];
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "0";
        }
        setXIsNext(!xIsNext);
        setSquares(nextSquares);
    };

    return (
        <>
            <div className={st.boardRow}>
                <Square
                    value={squares[0]}
                    onClick={() => addValueInSquare(0)}
                />
                <Square
                    value={squares[1]}
                    onClick={() => addValueInSquare(1)}
                />
                <Square
                    value={squares[2]}
                    onClick={() => addValueInSquare(2)}
                />
            </div>
            <div className={st.boardRow}>
                <Square
                    value={squares[3]}
                    onClick={() => addValueInSquare(3)}
                />
                <Square
                    value={squares[4]}
                    onClick={() => addValueInSquare(4)}
                />
                <Square
                    value={squares[5]}
                    onClick={() => addValueInSquare(5)}
                />
            </div>
            <div className={st.boardRow}>
                <Square
                    value={squares[6]}
                    onClick={() => addValueInSquare(6)}
                />
                <Square
                    value={squares[7]}
                    onClick={() => addValueInSquare(7)}
                />
                <Square
                    value={squares[8]}
                    onClick={() => addValueInSquare(8)}
                />
            </div>
        </>
    );
};
