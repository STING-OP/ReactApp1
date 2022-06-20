import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Routes, Route } from "react-router-dom";


const App = () => {
    return (
        <>
            <Navbar />
            <Routes> {/*switch is replaced with routes in react-router-dom v6 and component with element*/}
                <Route exact path="/" element={<Home />} />
                <Route exact path="/service" element={<Service />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App; 