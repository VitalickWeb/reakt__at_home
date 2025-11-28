import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Products } from "./components/Products/Products";
import { Users } from "./components/Users/Users";
import { Gallery } from "./components/Gallery/Gallery";
import { TodoList } from "./components/TodoList/TodoList";

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

    const title = "My academic project";

    const [count, setCount] = useState(0);

    const onCountHandler = () => {
        setCount(count + 1);
    };

    const onResetHandler = () => {
        setCount(0);
    };

    return (
        <div>
            <TodoList
                imageUrl={user.imageUrl}
                name={person.name}
                themeStyle={person.theme}
            />

            <Users users={user} title={title} count={count} />

            <Button title="Count" onClick={onCountHandler} />
            <Button title="Reset" onClick={onResetHandler} />

            <div className="avatar_box">
                <img className="avatar" alt="" />
            </div>

            <Products title="Products" products={products} />

            <Gallery />
        </div>
    );
};
