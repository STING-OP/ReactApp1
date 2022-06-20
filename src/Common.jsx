import React from "react";
import {NavLink} from 'react-router-dom'

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center mt-5">
                <div className="container-fluid mt-2">
                    <div className="row">
                        <div className="col-10 mx-auto mt-4">
                        <div className="row">
                            <div className="col-md-6   pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>{props.name}<br></br> {props.name2}{props.space}<strong className="brand">TouchSky</strong> </h1>
                                <h2 className="my-3">we are the team of talented developers</h2>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className="butn">{props.btn}</NavLink>
                                </div>

                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header_img mb-5 pb-5">
                                <img src={props.vector} className="img-fluid animate"></img>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Common; 