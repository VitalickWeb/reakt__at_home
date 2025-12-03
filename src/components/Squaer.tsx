import type { FC } from "react";

export type SquareType = {
    numbers: number;
};

export const Square: FC<SquareType> = ({ numbers }) => {
    return <button className="square">{numbers}</button>;
};
