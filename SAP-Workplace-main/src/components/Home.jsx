import React from "react";
import Amenities from "./Amenities";

const Home = () => {
    return (
        <div>
            <section id="Home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 mb-3 text-center"></h1>
                        </div>
                    </div>
                 </div>
                 <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-2">
                            <h1 className="display-4 mb-3 text-center"></h1>
                        </div>
                    </div>
                 </div>
                 <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-2 mb-3 text-center text-white">Reserve Your Fun at SAP</h1>
                        </div>
                        <div className="col-md-8 mt-2">
                        <p className="fs-2 text-center text-white">Anything is Possible.</p>
                        </div>
                    </div>
                 </div>
            </section>
            <Amenities/>
        </div>
    )
}

export default Home;