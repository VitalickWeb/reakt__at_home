import type { FC } from "react";
import st from "./Button.module.css";

export type ButtonType = {
    title: string;
    numbers?: number;
    onClick: () => void;
};

export const Button: FC<ButtonType> = ({ title, numbers, onClick }) => {
    const onBauttonHandler = () => {
        onClick();
    };

    return (
        <div className={st.button_container}>
            <button className={st.univerasl_btn} onClick={onBauttonHandler}>
                {title && <span className={st.buttonTitle}>{title}</span>}
                {numbers && <span className={st.buttonNumber}>{numbers}</span>}
            </button>
        </div>
    );
};
