import React from "react";
import Common from "./Common";
import workers from "../src/coworkers.svg"

const Home = () => {
    return (
        <>
            <Common name="Grow your Buisness" name2="with" space=" " vector={workers} btn="Get started" visit="/service" />
        </>
    );
};

export default Home; 