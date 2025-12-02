/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Products } from "./components/Products/Products";
import { Users } from "./components/Users/Users";
import { Gallery } from "./components/Gallery/Gallery";
import { TodoList } from "./components/TodoList/TodoList";
import { Board } from "./components/TicTacToe";

export const App = () => {
    const person = {
        name: "Gregorio Y. Zara",
        theme: {
            backgroundColor: "black",
            color: "pink",
        },
    };
    const user = {
        name: "Hedy Lamarr",
        imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
        imageSize: 90,
    };

    const products = [
        { title: "Cabbage", isFruit: false, id: 1 },
        { title: "Garlic", isFruit: false, id: 2 },
        { title: "Apple", isFruit: true, id: 3 },
    ];

    const image = {
        img: {
            src: "https://i.imgur.com/MK3eW3As.jpg",
            alt: "Katherine Johnson",
        },
    };

    const title = "My academic project";

    const [count, setCount] = useState(0);

    const onCountHandler = () => {
        setCount(count + 1);
    };

    const onResetHandler = () => {
        setCount(0);
    };

    const onSquareHandler = () => {};

    const [arrNums, setArrNums] = useState<number[]>([
        1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);

    return (
        <>
            <Board title="" arrNums={arrNums} onClick={onSquareHandler} />

            <Users users={user} title={title} count={count} />
            <Button title="Count" onClick={onCountHandler} />
            <Button title="Reset" onClick={onResetHandler} />

            <TodoList
                imageUrl={user.imageUrl}
                name={person.name}
                themeStyle={person.theme}
            />

            <div className="avatar_box">
                <img className="avatar" alt="" />
            </div>

            <Products title="Products" products={products} />

            <Gallery galery={image.img} />
        </>
    );
};
