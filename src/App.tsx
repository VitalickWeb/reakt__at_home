import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Products } from "./components/Products/Products";
import { Users } from "./components/Users/Users";

export const App = () => {
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

    const onButtonHandler = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <Users users={user} title={title} count={count} />

            <Button title="Button" onClick={onButtonHandler} />

            <div className="avatar_box">
                <img className="avatar" alt="" />
            </div>

            <Products title="Products" products={products} />
        </div>
    );
};
