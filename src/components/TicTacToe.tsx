import type { FC } from "react";
import st from "./TicTacToe.module.css";
import { Square } from "./Squaer";

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

export const Board: FC<BoardType> = ({ arrNums }) => {
    const rowsData = chunkArray(arrNums, 3);

    const renderTableBody = rowsData.map((rowArray, rowIndex) => {
        const renderCells = rowArray.map((elem, cellIndex) => {
            return (
                <td key={cellIndex}>
                    <Square />
                </td>
            );
        });

        return (
            <tr key={rowIndex} className={st.row_box}>
                {renderCells}
            </tr>
        );
    });

    return (
        <div className={st.block_board}>
            <table>
                <tbody>{renderTableBody}</tbody>
            </table>
        </div>
    );
};
