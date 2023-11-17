import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../store/hooks";
import { Medicine } from "../../types";
import { createMedicine } from "./medicineSlice";

const NewMedicine: React.FC = () => {
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Medicine>();

    const add = (data: any) => {
        console.log(data);
        dispatch(createMedicine(data));
        reset();
    };
    return (
        <>
            <div className="add_std_wrapper w-50 mx-auto mt-3">
                <div className="add_std_title text-center text-primary fs-2">
                    Add Medicine
                </div>
                <form
                    onSubmit={handleSubmit(add)}
                    className="border p-4 shadow-lg rounded mt-2"
                >
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label fs-4">
                            Medicine Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Name"
                            {...register("name", {
                                required: "Field is required",
                                pattern: {
                                    value: /^[A-Za-z]+$/i,
                                    message: "Enter letter",
                                },
                            })}
                        />
                        {errors.name && (
                            <p className="text-danger">{errors.name.message}</p>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="price" className="form-label fs-4">
                            Price
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            placeholder="Price"
                            {...register("price", {
                                required: "Field is required",
                                pattern: /^\d+$/,
                            })}
                        />
                        {errors.price && <p className="text-danger">Error</p>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="number" className="form-label fs-4">
                            Value
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="value"
                            placeholder="Value"
                            {...register("value", {
                                required: "Field is required",
                                pattern: /^\d+$/,
                            })}
                        />
                        {errors.value && <p className="text-danger">Error</p>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="company" className="form-label fs-4">
                            Company
                        </label>
                        <select
                            className="form-select form-select-sm mt-2 mb-3"
                            aria-label="default select example"
                            {...register("company", {
                                required: "Field is required",
                            })}
                        >
                            <option value="" disabled>
                                Choose Company
                            </option>
                            <option value="farmMed">farmMed</option>
                            <option value="Wellness Warehouse">
                                Wellness Warehouse
                            </option>
                            <option value="Pharma Paradise">
                                Pharma Paradise
                            </option>
                            <option value="Natural Potions">
                                Natural Potions
                            </option>
                        </select>
                        {errors.company && <p className="text-danger">Error</p>}
                    </div>
                    <div className="mb-3">
                        <div className="form-floating">
                            <textarea
                                className="form-control"
                                placeholder="Leave a comment here"
                                id="descr"
                                style={{ height: "100px" }}
                                {...register("descr", {
                                    required: "Field is required",
                                })}
                            ></textarea>
                            {errors.descr && (
                                <p className="text-danger">Error</p>
                            )}
                            <label htmlFor="floatingTextarea2">Comments</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        </>
    );
};

export default NewMedicine;
