import React from "react";
import { useHistory } from 'react-router' ;

const Register = () => {

    const history = useHistory();

    const [user, setUser] = useState({
        email : "",
        password : "",
        position : "",
    });

    // Handle Inputs
    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setUser({...user, [name]:value});
    }

    // Handle Submit
    const handleSubmit = async (event)=> {
        event.preventDefault();
        // Object DeStructuring
        // Store Object Data into Variables
        const {email, password, position} = user;
        try {
            const res = await fetch('/register', {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    email, password, position
                })
            })

            if(res.status === 400 || !res) {
                window.alert("Already Used Details")
            } else {
                // need to restart the server for proxy to work
                window.alert("Registerd Successfully");
                history.push('/login');
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className="display-4 mb-3 text-center"></h1>
                    </div>
                </div>
            </div>
            <div className="container mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="container ">
                            <div className="row justify-content-center">
                                <div className="col-md-8 mt-5">
                                    <h1 className="display-4 mb-3 text-center"></h1>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-4 mb-3" id="follow">
                            <h4 class="card-header p-3 text-center">Register
                            </h4>
                            <div class="card-body">
                                <form class="row g-3" onSubmit={handleSubmit} method="POST">
                                    <div class="col-fluid">
                                        <label for="inputEmail4" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="inputEmail4" name="email" value={user.email} onChange={handleInput}/>
                                    </div>
                                    <div class="col-fluid">
                                        <label for="inputPassword4" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="inputPassword4" name="password" value={user.password} onChange={handleInput}/>
                                    </div>
                                    <div class="col-fluid">
                                        <label for="inputAddress" class="form-label">Position</label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="eg. Hiring Manager" name="position" value={user.position} onChange={handleInput}/>
                                    </div>
                                    <div class="col-fluid">
                                        <label for="inputAddress2" class="form-label">Work Option</label>
                                        <div class="btn-group position-absolute end-0 me-3" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                                            <label class="btn btn-outline-primary" for="btnradio1">In-Person</label>

                                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                                            <label class="btn btn-outline-primary" for="btnradio2">Hybrid</label>

                                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                                            <label class="btn btn-outline-primary" for="btnradio3">Remote</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-primary mt-3">Sign up</button>
                                    </div>
                                    <div class="col-12">
                                        <label for="inputAddress2" class="form-label me-2">Have an account?</label>
                                        <a class="link" href="/login">Login</a>    
                                    </div>               
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className="display-4 mb-3 text-center"></h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className="display-4 mb-3 text-center"></h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className="display-4 mb-3 text-center"></h1>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>
    )
}

export default Register