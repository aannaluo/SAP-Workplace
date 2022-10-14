import React, {useState} from "react";

const Login = () => {

    const [user, setUser] = useState({
        email : "",
        password : ""
    });

    // Handle Input
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setUser({...user, [name]:value})
    }

    // Handle Login
    const handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = user;
        try {
            const res = await fetch('/login', {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    email, password
                })
            });

            if(res.status === 400 || !res) {
                window.alert("Invalid Credentials");
            } else {
                window.alert("Login Successful");
                window.location.reload();
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
                            <h4 class="card-header p-3 text-center">Login
                            </h4>
                            <div class="card-body">
                                <form class="row g-3" onSubmit={handleSubmit}>
                                    <div class="col-fluid">
                                        <label for="inputEmail4" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="inputEmail4" name="email" value={user.email} onChange={handleChange}/>
                                    </div>
                                    <div class="col-fluid">
                                        <label for="inputPassword4" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="inputPassword4" name="password" value={user.password} onChange={handleChange}/>
                                        <a class="link" href="#">Forgot Your Password?</a>   
                                    </div>
                                    <div class="col-fluid">
                                        <label for="inputAddress" class="form-label"></label>
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-primary mt-3">Sign in</button>
                                    </div>
                                    <div class="col-12">
                                        <label for="inputAddress2" class="form-label me-2">First-time user?</label>
                                        <a class="link" href="/register">Register</a>    
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

export default Login