import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../includes/header';
import Footer from '../includes/footer';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:5000/api/services/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email, password }),
            });
    
            const data = await response.json();
    
            if (response.ok && data.success) {
                // Store email in localStorage for session management
                localStorage.setItem("userEmail", email);
    
                // Redirect to the dashboard
                window.location.href = '/dashboard';
            } else {
                setError("Invalid email or password");
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        }
    };
    

    return (
        <>
            <Header />
            <section className="login" id="login">
                <div className="bg-overlay"></div>
                <div className="container"> {/* Fixed the typo from "conatainer" to "container" */}
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 text-center">
                            <div className="login-box">
                                <h1>Login</h1>
                                {error && <p className="error">{error}</p>}
                                <form onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    {/* <p><a href="#">Forgot Password</a></p> */}
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Login;
