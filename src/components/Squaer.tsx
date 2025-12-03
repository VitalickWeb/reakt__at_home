import { useState } from "react";
import st from "./Squaer.module.css";

export const Square = () => {
    const [value, setValue] = useState<string | null>(null);

    const onBauttonHandler = () => {
        setValue("X");
    };

    return (
        <button className={st.squaer} onClick={onBauttonHandler}>
            {value}
        </button>
    );
};
