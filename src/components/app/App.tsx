import React from "react";
import Header from "../header/Header";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import NewMedicine from "../newMedicine/NewMedicine";
import SingleMedicine from "../singleMedicine/SingleMedicine";
import Search from "../Search/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/addmedicine" element={<NewMedicine />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route
                        path="/shop/medicine/:id"
                        element={<SingleMedicine />}
                    />
                    <Route
                        path="/search/:searchId"
                        element={<Search />}
                    />
                </Routes>
            </Router>
        </>
    );
};

export default App;
