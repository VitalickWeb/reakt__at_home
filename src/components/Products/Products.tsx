import type { FC } from "react";
import st from "./Products.module.css"; // <-- Импорт модульных стилей

export type ProductsType = {
    title: string;
    products: propductType[];
};

type propductType = {
    title: string;
    isFruit: boolean;
    id: number;
};

export const Products: FC<ProductsType> = ({ title, products }) => {
    const renderProducts = products.map((p) => {
        const itemClass = p.isFruit ? st.fruit : st.vegetable;

        return (
            <li key={p.id} className={`${st.productItem} ${itemClass}`}>
                {p.title} ({p.isFruit ? "фрукт" : "овощ"})
            </li>
        );
    });

    return (
        <div className="products_item">
            <h2>{title}</h2>
            <ul className="products">{renderProducts}</ul>
        </div>
    );
};
