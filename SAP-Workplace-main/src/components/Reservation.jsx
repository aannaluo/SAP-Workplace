import React from "react";

const Reservation = () => {

    const bookRoom = async (event) => {
        event.preventDefault();
        try {
            const res = await fetch('/api/sendemail', {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : {
                    email : "aannaluo@gmail.com"
                }
            });

            if(res.status === 400 || !res) {
                window.alert("Error, please try again");
            } else {
                window.alert("Booked");
                window.location.reload();
            }
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div>
            <section id="Reservation">
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
                            <div className="col mb-4 sticky-bottom sticky-top">
                                <div className="container ">
                                    <div className="row justify-content-center">
                                        <div className="col-md-8 mt-5">
                                            <h1 className="display-4 mb-3 text-center"></h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mt-4 mb-3" id="follow">
                                    <h4 class="card-header p-3">Reservation Map
                                        <div class="btn-toolbar position-absolute top-0 end-0 mt-2" role="toolbar" aria-label="Toolbar with button groups">
                                            <div class="btn-group me-2" role="group" aria-label="First group">
                                                <button type="button" class="btn btn-outline-primary">B</button>
                                                <button type="button" class="btn btn-primary">1</button>
                                                <button type="button" class="btn btn-outline-primary">2</button>
                                                <button type="button" class="btn btn-outline-primary">3</button>
                                            </div>
                                        </div>
                                    </h4>
                                    <div class="card-body">

                                        <img src="https://i.imgur.com/MVt8Es3.png" class="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div className="container ">
                                <div className="row justify-content-center">
                                    <div className="col-md-8 mt-5">
                                        <h1 className="display-4 mb-3 text-center"></h1>
                                    </div>
                                </div>
                            </div>
                            <div class="card mt-4">
                                <h4 class="card-header">Whistler</h4>
                                <div class="card-body">
                                    <h5 class="card-title">Meeting Room</h5>
                                    <p class="card-text">8-10 people</p>
                                    <div class="container text-center">
                                        <div class="row">
                                            <div class="col">
                                                <a href="#" class="btn btn-primary col-12 disabled" tabindex="-1" aria-disabled="true">9:00-10:00AM</a>
                                                <a href="#" class="btn btn-primary col-12 mt-2 disabled" tabindex="-1" aria-disabled="true">10:00-11:00AM</a>
                                                <a href="#" class="btn btn-primary col-12 mt-2">11:00-12:00PM</a>
                                            </div>
                                            <div class="col">
                                                <a href="#" class="btn btn-primary col-12">12:00-1:00PM</a>
                                                <a href="#" class="btn btn-primary mt-2 col-12 disabled" tabindex="-1" aria-disabled="true">1:00-2:00PM</a>
                                                <a href="#" class="btn btn-primary mt-2 col-12" onclick={bookRoom}>2:00-3:00PM</a>
                                            </div>
                                            <div class="col">
                                                <a href="#" class="btn btn-primary col-12 disabled" tabindex="-1" aria-disabled="true">3:00-4:00PM</a>
                                                <a href="#" class="btn btn-primary mt-2 col-12">4:00-5:00PM</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card mt-4">
                                <h4 class="card-header">Vancouver</h4>
                                <div class="card-body">
                                    <h5 class="card-title">Meeting Room</h5>
                                    <p class="card-text">20-30 people</p>
                                    <div class="container text-center">
                                        <div class="row">
                                            <div class="col">
                                                <a href="#" class="btn btn-primary col-12 btn-block">9:00-10:00AM</a>
                                                <a href="#" class="btn btn-primary col-12 mt-2 btn-block">10:00-11:00AM</a>
                                                <a href="#" class="btn btn-primary col-12 mt-2 btn-block">11:00-12:00PM</a>
                                            </div>
                                            <div class="col">
                                                <a href="#" class="btn btn-primary col-12">12:00-1:00PM</a>
                                                <a href="#" class="btn btn-primary mt-2 col-12">1:00-2:00PM</a>
                                                <a href="#" class="btn btn-primary mt-2 col-12">2:00-3:00PM</a>
                                            </div>
                                            <div class="col">
                                                <a href="#" class="btn btn-primary col-12">3:00-4:00PM</a>
                                                <a href="#" class="btn btn-primary mt-2 col-12">4:00-5:00PM</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card mt-4">
                                <h4 class="card-header">Victoria</h4>
                                <div class="card-body">
                                    <h5 class="card-title">Meeting Room</h5>
                                    <p class="card-text">10-12 people</p>
                                    <div class="container text-center">
                                        <div class="row">
                                            <div class="col">
                                                <a href="#" class="btn btn-primary col-12 btn-block">9:00-10:00AM</a>
                                                <a href="#" class="btn btn-primary col-12 mt-2 btn-block">10:00-11:00AM</a>
                                                <a href="#" class="btn btn-primary col-12 mt-2 btn-block">11:00-12:00PM</a>
                                            </div>
                                            <div class="col">
                                                <a href="#" class="btn btn-primary col-12">12:00-1:00PM</a>
                                                <a href="#" class="btn btn-primary mt-2 col-12">1:00-2:00PM</a>
                                                <a href="#" class="btn btn-primary mt-2 col-12">2:00-3:00PM</a>
                                            </div>
                                            <div class="col">
                                                <a href="#" class="btn btn-primary col-12">3:00-4:00PM</a>
                                                <a href="#" class="btn btn-primary mt-2 col-12">4:00-5:00PM</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card mt-4 mb-4">
                                <h4 class="card-header">Anemone</h4>
                                <div class="card-body">
                                    <h5 class="card-title">Meeting Room</h5>
                                    <p class="card-text">6-8 people</p>
                                    <div class="container text-center">
                                        <div class="row">
                                            <div class="col">
                                                <a href="#" class="btn btn-primary col-12 btn-block">9:00-10:00AM</a>
                                                <a href="#" class="btn btn-primary col-12 mt-2 btn-block">10:00-11:00AM</a>
                                                <a href="#" class="btn btn-primary col-12 mt-2 btn-block">11:00-12:00PM</a>
                                            </div>
                                            <div class="col">
                                                <a href="#" class="btn btn-primary col-12">12:00-1:00PM</a>
                                                <a href="#" class="btn btn-primary mt-2 col-12">1:00-2:00PM</a>
                                                <a href="#" class="btn btn-primary mt-2 col-12">2:00-3:00PM</a>
                                            </div>
                                            <div class="col">
                                                <a href="#" class="btn btn-primary col-12">3:00-4:00PM</a>
                                                <a href="#" class="btn btn-primary mt-2 col-12">4:00-5:00PM</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Reservation;