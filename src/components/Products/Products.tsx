import type { FC } from "react";
import styled from "styled-components";
export type ProductsType = {
    title: string;
    products: propductType[];
};

type propductType = {
    title: string;
    isFruit: boolean;
    id: number;
};
interface ProdListItemsProps {
    isFruit: boolean;
}
export const Products: FC<ProductsType> = ({ title, products }) => {
    const renderProducts = products.map((p) => {
        return (
            <ProdListItems key={p.id} isFruit={p.isFruit}>
                {p.title} {p.isFruit ? "фрукт" : "овощ"}
            </ProdListItems>
        );
    });
    return (
        <ProductsItem>
            <ProdBox>
                <h2>{title}</h2>
                <ProductsList>{renderProducts}</ProductsList>
            </ProdBox>
        </ProductsItem>
    );
};

const ProductsItem = styled.div`
    border: 1px solid #ccc;
    padding: 15px;
    margin-bottom: 10px;
    background-color: #4f6b40ff;
`;
const ProdBox = styled.div``;
const ProductsList = styled.div`
    border: 1px solid #efd22dff;
    padding: 15px;
    margin-bottom: 10px;
    background-color: #6eb847ff;
`;
const ProdListItems = styled.div<ProdListItemsProps>`
    list-type-style: none;
    color: ${(props) => (props.isFruit ? "magenta" : "darkgreen")};
`;
