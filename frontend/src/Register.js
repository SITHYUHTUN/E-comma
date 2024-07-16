import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Register() {
    let navigate = useNavigate()
    // useEffect(() => {
    //     if (localStorage.getItem("user-info")) {
    //         navigate("/add");
    //     }
    // }, [navigate])
    const [results, setResult] = useState("")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    async function singUp(e) {
        e.preventDefault();
        const item = { name, email, password }
        let result = await fetch("http://localhost:8000/api/register", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }

        })
        result = await result.json();
        if(result.status==="error"){
            setResult(result)
        }
        if (result.success) {
            localStorage.setItem('user-info', JSON.stringify(result.user))
            alert(result.message);
            navigate("/products");
            console.log(result)
    
        }
        // console.log(result);

        // setResult(result)

    }
    console.log(results)

    

    return (
        <>

            <Header />
            <div className="register">
                <h1>Register Page</h1>
                {
                    results.status === "error" ? <div class="alert alert-warning" role="alert">
                        {results.errors[0]}
                    </div> :
                        <div></div>
                }

                <form onSubmit={singUp}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            className="form-control"
                            type="text"
                            id="name"
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            className="form-control"
                            type="email"
                            id="email"
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            className="form-control"
                            type="password"
                            id="password"
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>
                    <button type='submit' className='btn btn-primary form-control'>Sign Up</button>
                </form>

            </div>

        </>
    )
}
export default Register;