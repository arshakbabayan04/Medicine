import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { NavLink } from "react-router-dom";

type MedicineProps = {
    id: string;
    name: string;
    price: number;
    value: number;
    company: string;
    descr: string;
};

const Card: React.FC<MedicineProps> = (props) => {
    return (
        <>
            <div className="col-md-4">
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">
                            Price: {props.price}
                        </h6>
                        <p className="card-text">Value: {props.value}</p>
                        <NavLink
                            to={`/shop/medicine/${props.id}`}
                            className="card-link"
                        >
                            More
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
