import React, { useState } from "react";
import "./home.css";

const Home: React.FC = () => {

    return (
        <>
            <div className="promo mt-5">
                <div className="container">
                    <div className="promo_wrapper">
                        <div className="row h-100">
                            <div className="col-md-6">
                                <h1 className="title">
                                    Welcome To Our <br /> Company
                                </h1>
                            </div>
                            <div className="col-md-6">
                                <img
                                    src="https://cdn.lecturio.com/assets/Header-career-paths-for-IM-physicians.jpeg"
                                    alt="promo"
                                    className="promo_img d-block mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
