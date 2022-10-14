import React from "react";

const Amenities = () => {
    return (
        <div>
            <section id="amenities">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col">
                            <h3 className="fs-5 text-center mb-0">Our Resources</h3>
                            <h1 className="display-6 text-center mb-4">for <b>Everyone</b></h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div class="card p-3">
                                <img src="https://i.imgur.com/C34B4m0.jpg" height="180" class="card-img-top" />
                                <div class="card-body text-center">
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Gaming</h5>
                                    <p class="card-text lead">Play solo or with friends on different consoles</p>
                                    <a href="#" class="btn btn-primary">Reserve</a>
                                </div>
                            </div>
                            <div className="col mt-3">
                                <div class="card p-3">
                                    <img src="https://i.imgur.com/guHvr9M.jpg" class="card-img-top" />
                                    <div class="card-body text-center">
                                        <h5 class="card-title mb-3 fs-4 fw-bold">Ping Pong</h5>
                                        <p class="card-text lead">A timeless game of paddle, net, and ball</p>
                                        <a href="#" class="btn btn-primary">Reserve</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card p-3">
                                <img src="https://i.imgur.com/Q7cJOVU.jpg" class="card-img-top" />
                                <div class="card-body text-center">
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Pool and Billiards</h5>
                                    <p class="card-text lead"></p>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Reserve
                                    </button>

                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    ...
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card p-3 mt-3">
                                <img src="https://i.imgur.com/fHD77Vc.jpg" class="card-img-top" />
                                <div class="card-body text-center">
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Gym</h5>
                                    <p class="card-text lead">Balls</p>
                                    <a href="#" class="btn btn-primary">Reserve</a>
                                </div>
                            </div>
                            <div class="card p-3 mt-3">
                                <img src="https://i.imgur.com/VnOG0Am.jpg" class="card-img-top" />
                                <div class="card-body text-center">
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Board Games</h5>
                                    <p class="card-text lead">Play solo or with friends on different consoles</p>
                                    <a href="#" class="btn btn-primary">Reserve</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card p-3">
                                <img src="https://i.imgur.com/EPG1sMD.jpg" class="card-img-top" />
                                <div class="card-body text-center">
                                    <h5 class="card-title mb-3 fs-4 fw-bold">BBQ</h5>
                                    <p class="card-text lead">Hop on the grill with friends!</p>
                                    <a href="#" class="btn btn-primary">Reserve</a>
                                </div>
                            </div>
                            <div class="card p-3 mt-3">
                                <img src="https://i.imgur.com/w9rF41v.jpg" class="card-img-top" />
                                <div class="card-body text-center">
                                    <h5 class="card-title mb-3 fs-4 fw-bold">D-Shop</h5>
                                    <p class="card-text lead">Interesting gadgets and games</p>
                                    <a href="#" class="btn btn-primary">Reserve</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Amenities