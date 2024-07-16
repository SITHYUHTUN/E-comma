import React from "react";
import {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
function Login() {
    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/add")
        }
    }, [navigate])

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [result,setResult] = useState("");
    async function login() {
        const item = { email, password }
        let results = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        results = await results.json();
        if(results.status==="error"){
            setResult(results)
            // console.log(results.error[0]);
        }
        if(results.success){
            localStorage.setItem("user-info", JSON.stringify(results.user));
            alert(results.message);
            navigate("/products");
        }
    
        
        // localStorage.setItem("user-info", JSON.stringify(result));
        // navigate('/add')
    }
    console.log(result);
    return (
        <>
            <Header />
            <div className="login">
                <h1>Login Page</h1>
                {
                    result.status === "error" ? <div class="alert alert-warning" role="alert">
                        {result.error[0]}
                    </div> :
                        <div></div>
                }
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Passowrd</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        className="form-control" />
                </div>
                <div className="d-flex justify-content-center"><button className="btn btn-primary " onClick={login}>Login</button></div>


            </div>
        </>
    )
}
export default Login;