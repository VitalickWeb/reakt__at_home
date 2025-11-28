import type { FC } from "react";

export type TodoListType = {
    imageUrl: string;
    name: string;
};
export const TodoList: FC<TodoListType> = ({ imageUrl, name }) => {
    return (
        <div>
            <h1>Hedy Lamarr's Todos</h1>
            <img src={imageUrl} alt={name} className="photo" />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve spectrum technology</li>
            </ul>
        </div>
    );
};
