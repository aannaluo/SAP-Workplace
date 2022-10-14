import React from 'react'

const MakeEvent = () => {

    return (
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
                                    <h4 class="card-header p-3">Create Your Own Event
                                        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                            <div class="btn-group position-absolute top-0 end-0 mt-2 me-2" role="group" aria-label="Basic radio toggle button group">
                                                <input type="radio" id="open1" class="btn-check" name="btnradio" placeholder='' autocomplete="off" checked required/>
                                                <label class="btn btn-outline-primary" for="btnradio1">Team</label>

                                                <input type="radio" id="open1" class="btn-check" name="btnradio" placeholder='Open' autocomplete="off" required/>
                                                <label class="btn btn-outline-primary" for="btnradio2">Open</label>
                                            </div>
                                        </div>
                                    </h4>
                                    <div class="card-body">
                                        <form class="row g-3">
                                            <div class="col-fluid">
                                                <label for="inputEmail4" class="form-label">Title</label>
                                                <input type="email" class="form-control" id="ititle" required/>
                                            </div>
                                            <div class="col-fluid">
                                                <label for="inputEmail4" class="form-label">Description</label>
                                                <input type="email" class="form-control" id="idesc" required/>
                                            </div>
                                            <div class="col-fluid">
                                                <label for="inputDate" class="form-label">Date</label>
                                                <input type="date" class="form-control" id="idate" required/>
                                            </div>
                                            <div>
                                                <label for="inputDate" class="form-label">Time</label>
                                                <input type="time" class="form-control" id="itime" required/>
                                            </div>
                                            <div class="col-fluid">
                                                <label for="inputDate" class="form-label">Group Size</label>
                                                <input type="number" class="form-control" id="isize" required/>
                                            </div>
                                            <div class="col-fluid">
                                                <label for="inputPlace" class="form-label">Rec Space? </label>
                                                <select class="form-select" aria-label="Default select example" id="iwhere">
                                                    <option selected>Open this select menu</option>
                                                    <option value="1">Gaming Room</option>
                                                    <option value="2">Pool Tables</option>
                                                    <option value="3">Ping Pong Tables</option>
                                                    <option value="3">BBQ</option>
                                                    <option value="3">Gym</option>
                                                    <option value="3">Puzzle Room</option>
                                                    <option value="3">Other</option>
                                                </select>
                                            </div>
                                            <div class="col-12">
                                                <button type="submit" class="btn btn-primary mt-3">Add Event</button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
    )
}

export default MakeEvent