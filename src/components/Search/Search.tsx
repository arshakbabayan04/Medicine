import React, { useMemo } from "react";
import { useAppSelector } from "../../store/hooks";
import { Medicine } from "../../types";
import Card from "../shop/Card";
import { useParams } from "react-router-dom";

const Search: React.FC = () => {
    const { medicines } = useAppSelector((state) => state.medicine);
    const { searchId } = useParams<{ searchId?: string }>();
    console.log(searchId);

    const filteredMedicines: Medicine[] = useMemo(() => {
        if (searchId) {
            return medicines.filter((el) =>
                el.name.toLowerCase().startsWith(searchId.toLowerCase())
            );
        } else {
            return medicines;
        }
    }, [medicines, searchId]);
    return (
        <>
            <div className="search">
                <div className="container">
                    <div className="title mt-5 fs-1">
                        Search Medicine by: '{searchId}'
                    </div>
                    <div className="row mt-5">
                        {filteredMedicines.map((elm: Medicine) => (
                            <Card key={elm.id} {...elm} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;
