import type { FC } from "react";
import st from "./Board.module.css";
import { Square } from "./Squaer";

export type BoardType = object;

export const Board: FC<BoardType> = () => {
    return (
        <>
            <div className={st.boardRow}>
                <Square />
                <Square />
                <Square />
            </div>
            <div className={st.boardRow}>
                <Square />
                <Square />
                <Square />
            </div>
            <div className={st.boardRow}>
                <Square />
                <Square />
                <Square />
            </div>
        </>
    );
};
