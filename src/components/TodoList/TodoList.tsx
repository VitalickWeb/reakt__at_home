import type { FC } from "react";
import st from "./TodoList.module.css";

export type TodoListType = {
    imageUrl: string;
    name: string;
    themeStyle: {
        backgroundColor: string;
        color: string;
    };
};
export const TodoList: FC<TodoListType> = ({ imageUrl, name, themeStyle }) => {
    const themeClass = themeStyle ? st.darkTheme : st.lightTheme;

    return (
        <div className={themeClass}>
            <h1 className={themeClass}>{name}</h1>
            <img src={imageUrl} alt={name} className="photo" />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve spectrum technology</li>
            </ul>
        </div>
    );
};
