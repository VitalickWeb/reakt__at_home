import { useState, type FC } from "react";
import st from "./Squaer.module.css";

export type SquareType = {
    value: null[];
};

export const Square: FC<SquareType> = ({ value }) => {
    const [cross, setCross] = useState<string | null[]>(value);

    const onBauttonHandler = () => {
        setCross("X");
    };

    return (
        <button className={st.squaer} onClick={onBauttonHandler}>
            {cross}
        </button>
    );
};
