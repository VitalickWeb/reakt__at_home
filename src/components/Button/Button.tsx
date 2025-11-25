import type { FC } from "react";
import st from "./Button.module.css";

export type ButtonType = {
    title: string;
    onClick: () => void;
};

export const Button: FC<ButtonType> = ({ title, onClick }) => {
    const onBauttonHandler = () => {
        onClick();
    };

    return (
        <div className={st.button_container}>
            <button className={st.univerasl_btn} onClick={onBauttonHandler}>
                {title}
            </button>
        </div>
    );
};
