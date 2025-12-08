import type { FC } from "react";
import st from "./Squaer.module.css";

export type SquareType = {
    value: null[];
};

export const Square: FC<SquareType> = ({ value }) => {
    return <button className={st.squaer}>{value}</button>;
};
