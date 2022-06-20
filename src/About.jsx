import React from "react";
import Common from "./Common";
import bs from "../src/buissness.svg";

const About = () => {
    return (
        <>
           <Common name="Hello" name2="from" space=" " vector={bs} btn="Contact us" visit="/contact" />
        </>
    );
};

export default About; 