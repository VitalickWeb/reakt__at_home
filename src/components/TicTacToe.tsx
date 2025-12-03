import type { FC } from "react";
import { Button } from "./Button/Button";
import st from "./TicTacToe.module.css";

const chunkArray = (arr: number[], size: number) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
        chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
};

export type BoardType = {
    title: string;
    arrNums: number[];
    onClick: () => void;
};

export const Board: FC<BoardType> = ({ title, arrNums, onClick }) => {
    const onSquareHandler = () => {
        onClick();
    };

    const rowsData = chunkArray(arrNums, 3);

    const renderTableBody = rowsData.map((rowArray, rowIndex) => {
        const renderCells = rowArray.map((elem, cellIndex) => {
            return (
                <td key={cellIndex}>
                    <div className={st.board_table}>
                        <Button
                            title={title}
                            numbers={elem}
                            onClick={onSquareHandler}
                        />
                    </div>
                </td>
            );
        });

        return <tr key={rowIndex}>{renderCells}</tr>;
    });

    return (
        <div className={st.block_board}>
            <table>
                <tbody>{renderTableBody}</tbody>
            </table>
        </div>
    );
};
