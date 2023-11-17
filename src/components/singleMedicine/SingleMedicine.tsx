import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { useAppDispatch } from "../../store/hooks";
import { useMemo } from "react";
import { Medicine } from "../../types";
import { useForm } from "react-hook-form";
import { createComment, comentState } from "../newMedicine/medicineSlice";

const SingleMedicine: React.FC = () => {
    const dispatch = useAppDispatch();
    const { medicines, comments } = useAppSelector((state) => state.medicine);
    const { id } = useParams<string>();
    const data: Medicine = useMemo(
        () =>
            medicines.find((elm) => {
                return elm.id === id;
            }) as Medicine,
        [id]
    );

    const filteredComents: any = useMemo(
        () => comments.filter((comment) => comment.cid === id),
        [id]
    );

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<{ email: string; comment: string }>();

    const add = (data: { email: string; comment: string }) => {
        console.log(data);
        dispatch(createComment({ ...data, cid: id }));
        reset();
    };

    return (
        <>
            <div className="single">
                <div className="container">
                    <div className="card mt-5 w-50 mx-auto">
                        <div className="card-body">
                            <h5 className="card-title">{data.name}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">
                                {data.price}$
                            </h6>
                            <h6 className="card-subtitle mb-2 text-body-secondary">
                                Value: {data.value}
                            </h6>
                            <h6 className="card-subtitle mb-2 text-body-secondary">
                                By: {data.company.toUpperCase()}
                            </h6>
                            <p className="card-text">{data.descr}</p>
                        </div>
                    </div>
                    <form
                        className="w-50 mx-auto mt-5"
                        onSubmit={handleSubmit(add)}
                    >
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fs-2 ">
                                Write a comment
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Email"
                                {...register("email", {
                                    required: "Field is required",
                                    pattern: {
                                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                        message: "Enter email",
                                    },
                                })}
                            />
                            {errors.email && (
                                <p className="text-danger mt-2">
                                    Email is wrong
                                </p>
                            )}
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                id="comment"
                                aria-describedby="emailHelp"
                                placeholder="Write a commnet"
                                {...register("comment", {
                                    required: "Field is required",
                                })}
                            />
                            {errors.email && (
                                <p className="text-danger mt-2">
                                    Comment is wrong
                                </p>
                            )}
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Send
                        </button>
                    </form>
                    <h2 className="text-primary text-center">Comments</h2>
                    {filteredComents.map((elm: comentState) => (
                        <div key={elm.cid} className="card mt-5 w-50 mx-auto">
                            <div className="card-header fw-medium">
                                {elm.email}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fst-italic text-primary">
                                    Comment
                                </h5>
                                <p className="card-text fst-italic">
                                    {elm.comment}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SingleMedicine;
