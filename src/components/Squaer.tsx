import { useState, type FC } from "react";
import st from "./Squaer.module.css";

export type SquareType = object;

export const Square: FC<SquareType> = () => {
    const [cross, setCross] = useState<string | null>(null);

    const onBauttonHandler = () => {
        if (cross !== null) {
            return;
        }
        setCross("X");
    };

    return (
        <button className={st.squaer} onClick={onBauttonHandler}>
            {cross}
        </button>
    );
};
