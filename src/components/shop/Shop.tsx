import React from "react";
import { useAppSelector } from "../../store/hooks";
import Card from "./Card";
import { Medicine } from "../../types";
import SearchForm from "./SearchForm";

const Shop: React.FC = () => {
    const { medicines } = useAppSelector((state) => state.medicine);

    return (
        <>
            <div className="shop">
                <div className="container">
                    <SearchForm />
                    <div className="row mt-5">
                        {medicines.map((elm: Medicine) => (
                            <Card key={elm.id} {...elm} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;
