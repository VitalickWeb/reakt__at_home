import type { FC } from "react";
import { Button } from "./Button/Button";

export type SquareType = {
    title: string;
    onClick: () => void;
};

export const Square: FC<SquareType> = ({ title, onClick }) => {
    const onSquareHandler = () => {
        onClick();
    };

    return (
        <div className="square">
            <Button title={title} onClick={onSquareHandler} />
        </div>
    );
};
