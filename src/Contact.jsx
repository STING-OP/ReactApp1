import React from "react";

const Contact = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form action="action_page.php">
                            <div className="mb-3 mt-3">
                                <label for="text" className="form-label">Name</label>
                                <input type="text" className="form-control" id="text" placeholder="Enter your name" name="text" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label for="phone" className="form-label">Phone</label>
                                <input type="Phone" className="form-control" id="Phone" placeholder="phone number " name="Phone" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label for="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                            <div class="form-group">
                                <label for="comment">Comment</label>
                                <textarea class="form-control" rows="2" id="comment"></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-primary mt-4">Submit</button>
                        </form>

                    </div>
                </div>

            </div>
        </>
    );
};

export default Contact; 