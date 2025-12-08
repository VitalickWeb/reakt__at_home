import type { FC } from "react";
import st from "./Squaer.module.css";

export type SquareType = {
    value: null[];
    onClick: () => void;
};

export const Square: FC<SquareType> = ({ value, onClick }) => {
    const onSquareClickHandler = () => {
        onClick();
    };

    return (
        <button className={st.squaer} onClick={onSquareClickHandler}>
            {value}
        </button>
    );
};
