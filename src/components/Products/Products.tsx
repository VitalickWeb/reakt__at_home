import type { FC } from "react";

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
        return (
            <li key={p.id}>
                {p.title} {p.isFruit}
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
