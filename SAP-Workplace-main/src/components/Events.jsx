import React from "react";
import MakeEvent from "./MakeEvent";

const Events = () => {
    return (
        <div>
            <section id="Events">
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 mb-3 text-center"></h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">

                        <div class="col-sm-6">
                            <div className="container ">
                                <div className="row justify-content-center">
                                    <div className="col-md-8 mt-5">
                                        <h1 className="display-4 mb-3 text-center"></h1>
                                    </div>
                                </div>
                            </div>
                            <div class="card mt-4">
                                <h4 class="card-header">Ping Pong Tournament</h4>
                                <div class="card-body">
                                    <h5 class="card-title">Open to Everyone</h5>
                                    <p class="card-text">10/21/2022</p><p class="card-text">1:00PM</p>
                                    <p class="card-text">16 people</p>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary disabled">Joined</a>
                                </div>
                            </div>
                            <div class="card mt-4 mb-3">
                                <h4 class="card-header">Chess Tournament</h4>
                                <div class="card-body">
                                    <h5 class="card-title">Open to Everyone</h5>
                                    <p class="card-text">10/22/2022</p>
                                    <p class="card-text">12 people</p>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Join</a>
                                </div>
                            </div>
                            <div class="card mt-4 mb-3">
                                <h4 class="card-header">Sales Hiking</h4>
                                <div class="card-body">
                                    <h5 class="card-title">Vancouver Sales Team</h5>
                                    <p class="card-text">6 People</p>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary disabled">Join</a>
                                </div>
                            </div>
                        </div>
                        <MakeEvent/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Events;