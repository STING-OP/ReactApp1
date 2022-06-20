import React from "react";
import Card from "./Card";

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            <Card name="Android Development" image={require('./images/android.jpg')} />
                            <Card name="App Development" image={require('./images/app.jpg')} />
                            <Card name="Software Development" image={require('./images/software.jpg')} />
                            <Card name="Web Development" image={require('./images/web.jpg')} />
                            <Card name="Digital Marketing" image={require('./images/digital.jpg')} />
                            <Card name="Marketing" image={require('./images/market.jpg')} />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service; 