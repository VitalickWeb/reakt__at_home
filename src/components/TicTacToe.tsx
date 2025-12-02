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
    // rowsData теперь: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

    // 2. Двойной рендеринг: Сначала map для каждого РЯДА
    const renderTableBody = rowsData.map((rowArray, rowIndex) => {
        // 3. Внутри: map для каждой ЯЧЕЙКИ в этом ряду
        const renderCells = rowArray.map((elem, cellIndex) => {
            return (
                // Каждая ячейка <td> требует свой key
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

        // Возвращаем строку <tr>, содержащую все ячейки
        // Каждая строка <tr> требует свой уникальный key
        return <tr key={rowIndex}>{renderCells}</tr>;
    });

    // 4. Возвращаем готовую таблицу
    return (
        <div className={st.block_board}>
            <table>
                <tbody>{renderTableBody}</tbody>
            </table>
        </div>
    );
};
