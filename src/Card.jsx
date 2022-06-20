import React from "react";
const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                    <img class="card-img-top" src={props.image} className="img-fluid" alt="Card image" />
                    <div class="card-body">
                        <h4 class="card-title">{props.name}</h4>
                        <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                        <a href="#" class="btn btn-primary">Know more</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card; 