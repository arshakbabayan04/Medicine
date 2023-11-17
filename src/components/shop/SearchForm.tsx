import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SearchForm: React.FC = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<{ name: string }>();

    const add = (data: { name: string }) => {
        navigate(`/search/${data.name}`);
    };

    return (
        <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(add)}>
            <div className="mb-3">
                <label htmlFor="search" className="form-label fs-2">
                    Search Medicine
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="search"
                    aria-describedby="emailHelp"
                    {...register("name", {
                        required: "Field is required",
                        pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: "Enter letter",
                        },
                    })}
                />
                {errors.name && <p className="text-danger">Error</p>}
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default SearchForm;
